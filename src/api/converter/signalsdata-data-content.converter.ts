import { JsonConvert, JsonConverter, JsonCustomConvert } from 'json2typescript';
import { ExchangeSignalsDataEntity } from '../entity/signals-data/exchange-signals-data.entity';
import { ExchangeSignalsData, ISignalsDataDataContent, RiskReward } from '../entity/signals-data/signals-data.type';

function parseRiskReward(rr: string | null): RiskReward {
  if (!rr) {
    return {
      risk: 0,
      reward: 0
    };
  }
  const [risk, reward] = rr.split(':').map((x) => parseFloat(x));
  return {
    risk,
    reward
  };
}

const jsonConvert = new JsonConvert();

@JsonConverter
export class SignalsDataDataContentConverter implements JsonCustomConvert<Map<string, ExchangeSignalsDataEntity[]>> {
  public deserialize(data: ISignalsDataDataContent): Map<string, ExchangeSignalsDataEntity[]> {
    const result = new Map<string, ExchangeSignalsDataEntity[]>();
    Object.entries(data).forEach(([exchange, { signal_cards }]) => {
      const signalData: ExchangeSignalsDataEntity[] = [];
      signal_cards.forEach((card) => {
        const [, , symbol, , dateTime, info, extra] = card;
        const [[, position], [, type], [, group], , [, riskReward], [, potential]] = extra;
        const signal: ExchangeSignalsData = {
          symbol,
          date: new Date(dateTime * 1000),
          // info: jsonConvert.deserializeObject(info, ExchangeSignalsDataInfoEntity),
          info,
          position: position || '',
          type: type || '',
          group: group || '',
          // rr: jsonConvert.deserializeObject(parseRiskReward(riskReward), RiskRewardEntity),
          rr: parseRiskReward(riskReward),
          potential: parseFloat(potential || '0')
        };
        signalData.push(jsonConvert.deserializeObject(signal, ExchangeSignalsDataEntity));
      });
      result.set(exchange, signalData);
    });
    return result;
  }

  public serialize(data: Map<string, ExchangeSignalsDataEntity[]>): any {
    return Object.fromEntries(Array.from(data.entries()));
  }
}
