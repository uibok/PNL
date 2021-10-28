import { ISignalsDataDataContent } from '../../entity/signals-data/signals-data.type';
import { SignalsDataDataContentConverter } from '../signalsdata-data-content.converter';

const mockData: ISignalsDataDataContent = {
  'Binance Futures': {
    signal_cards: [
      [
        4534071,
        3500587,
        'TRX/USDT',
        0.10123,
        1635272641.809836,
        {
          time_passed: '12h',
          entry_progress: 0.5,
          take_profit_progress: 0,
          profit: -0.0124
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '17:50'],
          ['Potential Profit', '20.95%']
        ]
      ],
      [
        4532644,
        3499606,
        'ADA/USDT',
        2.141,
        1635267442.505268,
        {
          time_passed: '13h',
          entry_progress: 0.5,
          take_profit_progress: 0.2,
          profit: -0.0047
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '11:25'],
          ['Potential Profit', '27.27%']
        ]
      ],
      [
        4532621,
        3499590,
        'WAVES/USDT',
        28.337,
        1635267352.104105,
        {
          time_passed: '13h',
          entry_progress: 0.5,
          take_profit_progress: 0.2,
          profit: 0.0032
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '19:50'],
          ['Potential Profit', '19.03%']
        ]
      ],
      [
        4513994,
        3485780,
        'ALGO/USDT',
        1.9839,
        1635174246.418379,
        {
          time_passed: '1d',
          entry_progress: 0,
          take_profit_progress: 0,
          profit: 0
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '47:100'],
          ['Potential Profit', '34.52%']
        ]
      ],
      [
        4513980,
        3485769,
        'XLM/USDT',
        0.37067,
        1635174182.13107,
        {
          time_passed: '1d',
          entry_progress: 0.5,
          take_profit_progress: 0.1,
          profit: -0.0256
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '13:25'],
          ['Potential Profit', '17.65%']
        ]
      ],
      [
        4505349,
        3479495,
        'BNB/USDT',
        484.35,
        1635132640.536905,
        {
          time_passed: '2d',
          entry_progress: 0.5,
          take_profit_progress: 0.1,
          profit: 0.0081
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '39:100'],
          ['Potential Profit', '21.96%']
        ]
      ],
      [
        4500403,
        3476208,
        'ONT/USDT',
        0.9541,
        1635102920.198993,
        {
          time_passed: '2d',
          entry_progress: 0,
          take_profit_progress: 0,
          profit: 0
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '7:25'],
          ['Potential Profit', '24.51%']
        ]
      ],
      [
        4496641,
        3473215,
        'SRM/USDT',
        7.518,
        1635077979.238956,
        {
          time_passed: '2d',
          entry_progress: 0.5,
          take_profit_progress: 0.2,
          profit: -0.0066
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '19:50'],
          ['Potential Profit', '24.95%']
        ]
      ],
      [
        4487667,
        3466336,
        'DOT/USDT',
        44.665,
        1635017995.847745,
        {
          time_passed: '3d',
          entry_progress: 0,
          take_profit_progress: 0,
          profit: 0
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '43:100'],
          ['Potential Profit', '20.18%']
        ]
      ],
      [
        4487649,
        3466324,
        'DOT/USDT',
        44.665,
        1635017894.826113,
        {
          time_passed: '3d',
          entry_progress: 0.7,
          take_profit_progress: 0,
          profit: -0.0695
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', ''],
          ['Potential Profit', null]
        ]
      ],
      [
        4487609,
        3466296,
        'DOT/USDT',
        44.665,
        1635017791.783809,
        {
          time_passed: '3d',
          entry_progress: 0.7,
          take_profit_progress: 0,
          profit: -0.0695
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', ''],
          ['Potential Profit', null]
        ]
      ],
      [
        4487601,
        3466288,
        'CVC/USDT',
        0.46608,
        1635017673.579839,
        {
          time_passed: '3d',
          entry_progress: 0,
          take_profit_progress: 0,
          profit: 0
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '1:4'],
          ['Potential Profit', '27.37%']
        ]
      ],
      [
        4469277,
        3453139,
        'FIL/USDT',
        62.509,
        1634913351.988743,
        {
          time_passed: '4d',
          entry_progress: 0.5,
          take_profit_progress: 0.1,
          profit: -0.033
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '11:25'],
          ['Potential Profit', '26.54%']
        ]
      ],
      [
        4451575,
        3441148,
        'ADA/USDT',
        2.141,
        1634832118.4377,
        {
          time_passed: '5d',
          entry_progress: 0.5,
          take_profit_progress: 0.25,
          profit: 0.0089
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '53:100'],
          ['Potential Profit', '10.35%']
        ]
      ],
      [
        4449648,
        3439612,
        'ZRX/USDT',
        1.0508,
        1634823304.251335,
        {
          time_passed: '5d',
          entry_progress: 0.889,
          take_profit_progress: 0,
          profit: -0.0528
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', ''],
          ['Potential Profit', null]
        ]
      ],
      [
        4439313,
        3432644,
        'LINK/USDT',
        33.09,
        1634788553.301941,
        {
          time_passed: '6d',
          entry_progress: 1,
          take_profit_progress: 0,
          profit: -0.04
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', ''],
          ['Potential Profit', null]
        ]
      ],
      [
        4439303,
        3432635,
        'LINK/USDT',
        33.09,
        1634788498.585099,
        {
          time_passed: '6d',
          entry_progress: 1,
          take_profit_progress: 0,
          profit: -0.04
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', ''],
          ['Potential Profit', null]
        ]
      ],
      [
        4439293,
        3432625,
        'LINK/USDT',
        33.09,
        1634788262.926134,
        {
          time_passed: '6d',
          entry_progress: 1,
          take_profit_progress: 0,
          profit: -0.04
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', ''],
          ['Potential Profit', null]
        ]
      ],
      [
        4433930,
        3428829,
        'FIL/USDT',
        62.509,
        1634761082.691194,
        {
          time_passed: '6d',
          entry_progress: 0.5,
          take_profit_progress: 0.1,
          profit: -0.0602
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '1:2'],
          ['Potential Profit', '19.12%']
        ]
      ],
      [
        4432975,
        3428184,
        'GRT/USDT',
        1.0426,
        1634757035.512465,
        {
          time_passed: '6d',
          entry_progress: 0,
          take_profit_progress: 0,
          profit: 0
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '11:50'],
          ['Potential Profit', '26.88%']
        ]
      ],
      [
        4427978,
        3425059,
        'TLM/USDT',
        0.2058,
        1634744180.652806,
        {
          time_passed: '6d',
          entry_progress: 1,
          take_profit_progress: 0.167,
          profit: 0.0447
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '8:25'],
          ['Potential Profit', '45.59%']
        ]
      ],
      [
        4395239,
        3401935,
        'LINA/USDT',
        0.05157,
        1634568027.642675,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.286,
          profit: -0.0034
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '9:25'],
          ['Potential Profit', '18.75%']
        ]
      ],
      [
        4383263,
        3393287,
        'BNB/USDT',
        484.35,
        1634491635.458195,
        {
          time_passed: '1w',
          entry_progress: 0,
          take_profit_progress: 0,
          profit: 0
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '41:100'],
          ['Potential Profit', '18.08%']
        ]
      ],
      [
        4371137,
        3384461,
        'BCH/USDT',
        612.37,
        1634415810.18225,
        {
          time_passed: '1w',
          entry_progress: 1,
          take_profit_progress: 0.2,
          profit: 0.0124
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '9:25'],
          ['Potential Profit', '20.18%']
        ]
      ],
      [
        4351324,
        3370334,
        'IOTA/USDT',
        1.3557,
        1634313103.901745,
        {
          time_passed: '1w',
          entry_progress: 0,
          take_profit_progress: 0,
          profit: 0
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '73:100'],
          ['Potential Profit', '34.56%']
        ]
      ],
      [
        4341306,
        3363154,
        'BCH/USDT',
        612.37,
        1634270053.09511,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.2,
          profit: -0.0139
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '9:25'],
          ['Potential Profit', '20.18%']
        ]
      ],
      [
        4341297,
        3363148,
        'ALICE/USDT',
        12.999,
        1634269975.811625,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.444,
          profit: 0.0582
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '-1:10'],
          ['Potential Profit', '30.24%']
        ]
      ],
      [
        4334677,
        3358790,
        'LUNA/USDT',
        42.981,
        1634231523.128094,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.7,
          profit: 0.1399
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '-7:50'],
          ['Potential Profit', '31.3%']
        ]
      ],
      [
        4332602,
        3357356,
        'DASH/USDT',
        199.37,
        1634221542.910487,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.5,
          profit: 0.0598
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '-13:100'],
          ['Potential Profit', '19.1%']
        ]
      ],
      [
        4332530,
        3357327,
        'DASH/USDT',
        199.37,
        1634221373.479236,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.444,
          profit: 0.0649
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '-9:100'],
          ['Potential Profit', '25.07%']
        ]
      ],
      [
        4316220,
        3346195,
        'THETA/USDT',
        7.061,
        1634146026.595662,
        {
          time_passed: '1w',
          entry_progress: 0,
          take_profit_progress: 0,
          profit: 0
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '6:25'],
          ['Potential Profit', '23.81%']
        ]
      ],
      [
        4316191,
        3346183,
        'EOS/USDT',
        4.697,
        1634145992.39507,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.429,
          profit: 0.0379
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '19:50'],
          ['Potential Profit', '20.43%']
        ]
      ],
      [
        4315824,
        3345960,
        'BNB/USDT',
        484.35,
        1634144287.41187,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.444,
          profit: 0.0515
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '-3:25'],
          ['Potential Profit', '19.58%']
        ]
      ],
      [
        4305540,
        3338731,
        'XRP/USDT',
        1.1059,
        1634096830.13569,
        {
          time_passed: '2w',
          entry_progress: 0.5,
          take_profit_progress: 0.333,
          profit: 0.005
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '9:20'],
          ['Potential Profit', '14.82%']
        ]
      ],
      [
        4299590,
        3334634,
        'BNB/USDT',
        484.35,
        1634068186.479185,
        {
          time_passed: '2w',
          entry_progress: 0.5,
          take_profit_progress: 0.625,
          profit: 0.0791
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '-3:20'],
          ['Potential Profit', '18.43%']
        ]
      ],
      [
        4295017,
        3331487,
        'LUNA/USDT',
        42.981,
        1634052730.852821,
        {
          time_passed: '2w',
          entry_progress: 0.5,
          take_profit_progress: 0.7,
          profit: 0.1399
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '-7:50'],
          ['Potential Profit', '31.3%']
        ]
      ],
      [
        4249287,
        3298181,
        'ZRX/USDT',
        1.0508,
        1633788287.052787,
        {
          time_passed: '2w',
          entry_progress: 0.5,
          take_profit_progress: 0.2,
          profit: -0.0175
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '9:20'],
          ['Potential Profit', '24.44%']
        ]
      ],
      [
        4248401,
        3297513,
        'ZEC/USDT',
        160.13,
        1633785880.309025,
        {
          time_passed: '2w',
          entry_progress: 1,
          take_profit_progress: 0.7,
          profit: 0.2525
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '31:100'],
          ['Potential Profit', '46.88%']
        ]
      ],
      [
        4248365,
        3297487,
        'ZRX/USDT',
        1.0508,
        1633785632.299746,
        {
          time_passed: '2w',
          entry_progress: 1,
          take_profit_progress: 0,
          profit: -0.2296
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', ''],
          ['Potential Profit', null]
        ]
      ],
      [
        4233650,
        3287291,
        'ONT/USDT',
        0.9541,
        1633708652.679464,
        {
          time_passed: '2w',
          entry_progress: 0.5,
          take_profit_progress: 0.333,
          profit: -0.0297
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '13:50'],
          ['Potential Profit', '69.52%']
        ]
      ],
      [
        4222703,
        3279749,
        'COMP/USDT',
        347.19,
        1633664860.901231,
        {
          time_passed: '2w',
          entry_progress: 0.5,
          take_profit_progress: 0.556,
          profit: 0.0841
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '31:100'],
          ['Potential Profit', '45.0%']
        ]
      ],
      [
        4212545,
        3272578,
        'UNI/USDT',
        27.916,
        1633615829.636316,
        {
          time_passed: '2w',
          entry_progress: 0.5,
          take_profit_progress: 0.444,
          profit: 0.0806
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '39:100'],
          ['Potential Profit', '23.58%']
        ]
      ],
      [
        4198121,
        3261772,
        'VET/USDT',
        0.14077,
        1633539435.52183,
        {
          time_passed: '2w',
          entry_progress: 0.5,
          take_profit_progress: 0.6,
          profit: 0.1627
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '3:10'],
          ['Potential Profit', '32.79%']
        ]
      ],
      [
        4197983,
        3261687,
        'XRP/USDT',
        1.1059,
        1633539101.933335,
        {
          time_passed: '2w',
          entry_progress: 0.5,
          take_profit_progress: 0.556,
          profit: 0.0304
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '43:100'],
          ['Potential Profit', '19.93%']
        ]
      ],
      [
        4179948,
        3248781,
        'CHZ/USDT',
        0.34448,
        1633453848.642622,
        {
          time_passed: '3w',
          entry_progress: 0.5,
          take_profit_progress: 0.8,
          profit: 0.1064
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '9:20'],
          ['Potential Profit', '16.05%']
        ]
      ],
      [
        4175978,
        3245964,
        'YFI/USDT',
        39237,
        1633437841.083077,
        {
          time_passed: '3w',
          entry_progress: 0.5,
          take_profit_progress: 0.625,
          profit: 0.1776
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '7:25'],
          ['Potential Profit', '29.85%']
        ]
      ],
      [
        4171935,
        3243015,
        'TOMO/USDT',
        2.5731,
        1633428083.091195,
        {
          time_passed: '3w',
          entry_progress: 0.5,
          take_profit_progress: 0.571,
          profit: 0.0497
        },
        [
          ['Long/Short', 'Short'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '49:100'],
          ['Potential Profit', '24.05%']
        ]
      ],
      [
        4167056,
        3239603,
        'CHZ/USDT',
        0.34448,
        1633406382.98513,
        {
          time_passed: '3w',
          entry_progress: 0.5,
          take_profit_progress: 0.75,
          profit: 0.1574
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '39:100'],
          ['Potential Profit', '26.04%']
        ]
      ],
      [
        4158231,
        3233405,
        'REEF/USDT',
        0.031496,
        1633358801.053078,
        {
          time_passed: '3w',
          entry_progress: 0.5,
          take_profit_progress: 0.875,
          profit: 0.2788
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '17:50'],
          ['Potential Profit', '36.94%']
        ]
      ],
      [
        4153321,
        3230029,
        'LIT/USDT',
        5.122,
        1633341403.263837,
        {
          time_passed: '3w',
          entry_progress: 1,
          take_profit_progress: 0.6,
          profit: 0.3034
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '27:50'],
          ['Potential Profit', '38.17%']
        ]
      ],
      [
        4145187,
        3224288,
        'AAVE/USDT',
        384.91,
        1633288067.297888,
        {
          time_passed: '3w',
          entry_progress: 1,
          take_profit_progress: 0.571,
          profit: 0.1922
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '49:100'],
          ['Potential Profit', '27.63%']
        ]
      ],
      [
        4141433,
        3221833,
        'ALGO/USDT',
        1.9839,
        1633270970.093253,
        {
          time_passed: '3w',
          entry_progress: 1,
          take_profit_progress: 0,
          profit: 0.0497
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '37:100'],
          ['Potential Profit', '48.68%']
        ]
      ],
      [
        4141347,
        3221776,
        'ETC/USDT',
        54.306,
        1633270771.930098,
        {
          time_passed: '3w',
          entry_progress: 1,
          take_profit_progress: 0.8,
          profit: 0.0682
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '97:100'],
          ['Potential Profit', '8.99%']
        ]
      ],
      [
        4087737,
        3185677,
        'OMG/USDT',
        13.711,
        1632989111.662139,
        {
          time_passed: '3w',
          entry_progress: 0,
          take_profit_progress: 0,
          profit: 0
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Futures'],
          ['Risk/Reward', '3:10'],
          ['Potential Profit', '14.45%']
        ]
      ]
    ]
  },
  'Huobi.pro': {
    signal_cards: [
      [
        4396640,
        3402749,
        'DOGE/USDT',
        0.258414,
        1634571557.241742,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.5,
          profit: 0.0337
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Huobi.pro, Bittrex, FTX, KuCoin, Binance'],
          ['Risk/Reward', ''],
          ['Potential Profit', '27.73%']
        ]
      ]
    ]
  },
  Bittrex: {
    signal_cards: [
      [
        4396638,
        3402749,
        'DOGE/USDT',
        0.25841368,
        1634571557.241742,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.5,
          profit: 0.0337
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Huobi.pro, Bittrex, FTX, KuCoin, Binance'],
          ['Risk/Reward', ''],
          ['Potential Profit', '27.73%']
        ]
      ]
    ]
  },
  FTX: {
    signal_cards: [
      [
        4396639,
        3402749,
        'DOGE/USDT',
        0.2584137,
        1634571557.241742,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.5,
          profit: 0.0337
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Huobi.pro, Bittrex, FTX, KuCoin, Binance'],
          ['Risk/Reward', ''],
          ['Potential Profit', '27.73%']
        ]
      ]
    ]
  },
  KuCoin: {
    signal_cards: [
      [
        4396641,
        3402749,
        'DOGE/USDT',
        0.25841,
        1634571557.241742,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.5,
          profit: 0.0337
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Huobi.pro, Bittrex, FTX, KuCoin, Binance'],
          ['Risk/Reward', ''],
          ['Potential Profit', '27.73%']
        ]
      ]
    ]
  },
  Binance: {
    signal_cards: [
      [
        4396637,
        3402749,
        'DOGE/USDT',
        0.2584,
        1634571557.241742,
        {
          time_passed: '1w',
          entry_progress: 0.5,
          take_profit_progress: 0.5,
          profit: 0.0337
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Huobi.pro, Bittrex, FTX, KuCoin, Binance'],
          ['Risk/Reward', ''],
          ['Potential Profit', '27.73%']
        ]
      ]
    ]
  },
  'Binance Coin-Futures': {
    signal_cards: [
      [
        4268715,
        3311822,
        'BTC/USD',
        60775,
        1633892810.599294,
        {
          time_passed: '2w',
          entry_progress: 0,
          take_profit_progress: 0,
          profit: 0
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Coin-Futures'],
          ['Risk/Reward', '3:5'],
          ['Potential Profit', '9.2%']
        ]
      ],
      [
        4128276,
        3212965,
        'DOGE/USD',
        0.258756,
        1633197624.998305,
        {
          time_passed: '3w',
          entry_progress: 0.5,
          take_profit_progress: 0.6,
          profit: 0.1529
        },
        [
          ['Long/Short', 'Long'],
          ['Signal Type', 'Regular'],
          ['Group', 'High Accuracy Crypto Signals'],
          ['Exchanges', 'Binance Coin-Futures'],
          ['Risk/Reward', '17:50'],
          ['Potential Profit', '33.59%']
        ]
      ]
    ]
  }
};

describe('SignalsDataDataContentConverter', () => {
  let converter: SignalsDataDataContentConverter;
  beforeEach(() => {
    converter = new SignalsDataDataContentConverter();
  });
  it('deserialize', () => {
    const result = converter.deserialize(mockData);
    expect(result).toBeDefined();
  });
});
