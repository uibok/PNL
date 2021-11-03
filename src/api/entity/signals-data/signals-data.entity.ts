import { JsonObject, JsonProperty } from 'json2typescript';
import { SignalsDataDataContentConverter } from '../../converter/signalsdata-data-content.converter';
import { ExchangeSignalsData, ExchangeSignalsDataInfo, RiskReward, SignalsDataData, SignalsDataResponse } from './signals-data.type';

@JsonObject('RiskRewardEntity')
export class RiskRewardEntity implements RiskReward {
  @JsonProperty('risk', Number)
  risk = 0;
  @JsonProperty('reward', Number)
  reward = 0;

  calculateRR() {
    if (!this.risk || !this.reward) {
      return 0;
    }
    return Math.round((this.reward / this.risk) * 100) / 100;
  }
}

@JsonObject('ExchangeSignalsDataInfoEntity')
export class ExchangeSignalsDataInfoEntity implements ExchangeSignalsDataInfo {
  @JsonProperty('time_passed', String)
  time_passed = '';
  @JsonProperty('entry_progress', Number)
  entry_progress = 0;
  @JsonProperty('take_profit_progress', Number)
  take_profit_progress = 0;
  @JsonProperty('profit', Number, true)
  profit = 0;
}

@JsonObject('ExchangeSignalsDataEntity')
export class ExchangeSignalsDataEntity implements ExchangeSignalsData {
  @JsonProperty('symbol', String)
  symbol = '';
  @JsonProperty('date', Date)
  date = new Date();
  @JsonProperty('info', ExchangeSignalsDataInfoEntity)
  info = new ExchangeSignalsDataInfoEntity();
  @JsonProperty('position', String)
  position = '';
  @JsonProperty('type', String)
  type = '';
  @JsonProperty('group', String)
  group = '';
  @JsonProperty('rr', RiskRewardEntity)
  rr = new RiskRewardEntity();
  @JsonProperty('potential', Number, true)
  potential = 0;
}

@JsonObject('SignalsDataDataEntity')
export class SignalsDataDataEntity implements SignalsDataData {
  @JsonProperty('data', SignalsDataDataContentConverter)
  data = new Map<string, ExchangeSignalsDataEntity[]>();
  @JsonProperty('headers', [String])
  headers: string[] = [];
  @JsonProperty('info_link', String)
  info_link = '';
}

@JsonObject('SignalsDataResponseEntity')
export class SignalsDataResponseEntity implements SignalsDataResponse {
  @JsonProperty('message', String)
  message = '';
  @JsonProperty('error_type', String)
  error_type = '';
  @JsonProperty('data', SignalsDataDataEntity)
  data = new SignalsDataDataEntity();
  @JsonProperty('code', Number)
  code = 0;
}