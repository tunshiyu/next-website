/*
 * @文件描述:constant
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-08-21 10:47:17
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-08-26 17:16:47
 */

//  下面四个分别是技术,产品,设计,运维岗位的招聘信息配置
export const TECHNICALS = [
  {
    position: '后端开发技术工程师',
    conditions: '杭州 | 经验不限 | 本科',
    upTitle: '工作职责',
    subTitle: '技能要求',
    dutys: [
      '1.参与项目需求分析和系统设计；',
      '2.编写负责模块代码、保证系统的安全性，稳定性；',
      '3.技术预研和技术难点攻关，保障系统可用性、稳定性、和可扩展性；',
    ],
    skills: [
      '1.熟悉Spring，Mybatis等主流的开源框架；',
      '2.有较强的团队精神和沟通协调能力；',
      '3.良好的数据结构和算法能力；',
      '4.熟悉 MySQL、Redis 等常见数据库和缓存；熟悉数据库调优；',
      '5.熟悉docker 容器化技术,有过kubernetes开发经验者优先；',
      '6.熟悉grpc或者thrift等rpc架构；',
      '7.具有大数据开发经验者优先；',
      '8.具备独立解决问题的能力，对软件产品有强烈的责任心；',
    ],
  },
  {
    position: 'Golang后端开发',
    conditions: '杭州 | 两年以上 | 本科',
    upTitle: '岗位描述',
    subTitle: '任职要求',
    dutys: [
      '1.参与项目需求分析和系统设计；',
      '2.编写负责模块代码、保证系统的安全性，稳定性；',
      '3.区块链技术预研和技术难点攻关，保障系统可用性、稳定性、和可扩展性；',
    ],
    skills: [
      '1.本科及以上学历，两年及以上golang后台开发经验',
      '2.具备独立解决问题的能力，有强烈的责任心和主人翁精神',
      '3.有较强的团队精神和沟通协调能力',
      '4.良好的数据结构和算法能力',
      '5.熟悉MySQL、Redis等常见数据库和缓存；熟悉数据库调优',
      '6.追求极致的代码质量和架构设计',
      '7.有分布式系统运维经验，有kubernetes，docker等运维经验优先',
      '8.了解开源区块链项目优先，如Ethereum、Hyperledger',
    ],
  },
  {
    position: '前端开发工程师',
    conditions: '杭州 | 3-5年 | 本科',
    upTitle: '任职职责',
    subTitle: '加分项',
    dutys: [
      '1.扎实的JS、CSS基础，掌握JS原型链，上下文，闭包等机制。掌握CSS布局，重排重绘，渲染等机制；',
      '2.熟悉React生态，有React开发经验，了解webpack/antd/react router/redux/mob等方案；',
      '3.了解主流MVC/MVVM框架思想，具备模块化编程思想，能编写可读可维护可测试的前端代码；',
      '4.掌握CSS3及ES6新特性，熟练使用sass、less、typescript等开发语言；',
      '5.有一定的英文技术文档阅读能力；',
      '6.善于学习、思考、总结，能独立分析和解决问题，具备良好的团队合作精神和抗压能力，要有创业的激情和坚定的信念；',
    ],
    skills: [
      '1.有后端开发经验（nodejs/java/python/Go）加分；',
      '2.熟悉echarts，d3等可视化技术；',
      '3.有工业制造、数据分析、智能物流的前端研发经验优先；',
      '4.熟悉软件产品的整体实现过程，有独立产品设计经验者优先；',
      '5.具备很强的责任心，做事细致认真，同时具备很强的沟通和学习能力，能快速理解工业制造业需求，有相关行业背景者优先；',
    ],
  },
  {
    position: '数据分析工程师',
    conditions: '杭州 | 1-3年 | 本科',
    upTitle: '岗位职责',
    subTitle: '任职要求',
    dutys: [
      '1、深入理解业务方向，与业务一起构建数据体系、日常报表并推动数据产品化，完善日常数据监控体系，监控和洞察业务问题；',
      '2、深入理解业务运作，利用多种分析方法和手段，分析用户、产品及营销等，发现业务问题与机会，并能给出有效的行动建议，辅助业务决策；',
      '3、与业务部门紧密合作，实施数据分析的结果并跟踪其效果',
    ],
    skills: [
      '1、本科及以上学历，统计学、经济、数理、信息和计算机等相关专业；',
      '2、2年及以上相关工作经验，有互联网或移动互联网行业用户、产品、运营及营销分析经验；',
      '3、熟练掌握Excel、SQL、PPT，且至少一种常用数据分析工具（SPSS/SAS/R/Python等）；',
      '4、具有Python编程经验优先；',
      '5、熟悉并理解常规的数据分析方法、数据挖掘算法；',
      '6、商业和业务逻辑敏感度高，具备良好的逻辑分析和系统性思维能力，优秀的数据思维和强烈的数据决策意识，且思维缜密，做事认真严谨；',
      '7、良好的沟通能力、团队精神及抗压能力。',
    ],
  },
  {
    position: '资深算法工程师',
    conditions: '杭州 | 3-5年 | 硕士',
    upTitle: '岗位职责',
    subTitle: '任职要求',
    dutys: [
      '1.展开机器学习/深度学习等相关领域研究和开发工作',
      '2.负责机器学习/深度学习框架搭建，包括算法和系统研发;',
      '3.支持公司相关产品机器学习/深度学习相关研究',
    ],
    skills: [
      '1.机器学习/模式识别等相关专业硕士及以上学历；',
      '2.在机器学习领域有较深的理论研究和实践经验，2年以上工作经验；',
      '3.具备机器学习 / 自然语言处理 / 数据挖掘其中至少一种的研究背景和项目背景；',
      '4.编程能力强(Java)，熟练运用Python，R 等脚本语言，有较大型项目开发经验；',
      '5.善于解决和分析问题，富有想象力和学习能力，良好的团队合作精神,有创造性思维，有推进人工智能的理想和使命感',
      '6.深度学习技术的研究和开发, 在金融领域的应用，进行分类和预测。',
      '7.机器学习在舆情分析，文本处理，物流和仓储，人工智能等方面的应用',
      '8.自然语言处理、金融、量化、个性化推荐、广告精准营销相关经验',
      '9.DMP，DSP，推荐系统优先',
    ],
  },
];
export const PRODUCTS = [
  {
    position: '互联网产品经理',
    conditions: '杭州 | 3-5年 | 本科',
    upTitle: '工作职责',
    subTitle: '任职要求',
    dutys: [
      '1. 根据公司发展战略，负责全条线产品（网站、小程序、APP等）生命周期过程的管理，包括：产品规划、业务分析、需求撰写、流程设计、功能设计、原型设计、用户体验、从业务调研、需求分析及新功能提炼到实现过程、产品发布、迭代等的整个需求管理流程，快速高效地推动产品设计、研发、运营、推广等后期环节；',
      '2. 对市场发展趋势有敏锐的洞察力和创新意识及良好的分析、研判能力，能够深刻的把握用户需求；',
      '3. 根据产品实施效果及业务发展情况，迭代优化产品，提升产品质量和用户体验；',
      '4. 关注行业动态和竞争对手情况，分析竞争对手产品并提出前瞻性的优化产品策略。',
      '5. 跟进研发过程，推动项目落地，为产品整体质量负责',
    ],
    skills: [
      '1.本科及以上学历，金融专业、计算机专业、数学专业。',
      '至少3年以上互联网（自媒体平台、电商平台、社区/社群平台等）产品工作经验；',
      '2.至少独立负责过一款互联网产品，熟悉产品管理的整体流程；',
      '3.关注用户体验，对市场敏感，对新型产品有自己的见解；',
      '4.精通互联网产品交互设计的相关流程，能够熟练使用Axure（客户端软件）、墨刀等设计软件',
      '5.思维敏捷，善于思考，沟通能力较强，注重工作效率和团队协作。',
      '6.具备优秀的数据分析能力和严密的逻辑思维；',
      '7.能接受经常出差，抗压能力强；',
      '8.具有新能源领域的相关经验者优先',
    ],
  },
  {
    position: '物流大数据产品经理',
    conditions: '杭州 | 3-5年 | 本科',
    upTitle: '工作职责',
    subTitle: '任职要求',
    dutys: [
      '1. 负责以物流大数据为主的产品群的规划和设计；',
      '2. 梳理产品需求，绘制产品线框图，撰写需求文档；',
      '3. 根据产品实施效果及业务发展情况，迭代优化产品，提升产品质量和用户体验；',
      '4. 监控行业动向以及竞争对手产品，提出产品改进方案；',
      '5. 整合资源，协调不同岗位人员的工作，跟进研发过程，推动项目落地，为产品整体质量负责',
    ],
    skills: [
      '1.有一定的产品运营经验，具有项目管理经验，能够独立进行产品规划、设计和管理；',
      '2.关注用户体验，对市场敏感，对新型产品有自己的见解；',
      '3.具备较强的文字表达能力、PPT文案撰写能力、口头表达能力和学习能力；',
      '4.沟通能力、团队协作能力强，具备项目领导力与工作激情，强烈的责任心和自我驱动力；',
      '5.具备优秀的数据分析能力和严密的逻辑思维；',
      '6.能接受经常出差，抗压能力强；',
      '7.具备物流行业从业经验者优先；',
    ],
  },
];
export const DESIGNS = [
  {
    position: 'UI设计师',
    conditions: '杭州 | 3-5年 | 本科',
    upTitle: '工作职责',
    subTitle: '任职要求',
    dutys: [
      '1、负责APP端、PC端产品设计工作；与产品经理合作进行前期产品功能、业务方向探索，了解用户需求关注产品的设计动向，为产品提供专业的美术意见及建议；',
      '2、准确理解产品需求和交互原型，设计出优质用户体验的界面效果图；',
      '3、为界面、图标、动画等提供高质量和创造性的设计方案；熟练运用各种设计方法进行快速设计和迭代；',
      '招聘UI主管，有管理团队相关经验者优先 ',
    ],
    skills: [
      '1、从事视觉设计工作3年以上，有成功的设计作品和产品案例；',
      '2、具备丰富的设计理论知识，对设计趋势有敏锐的洞察力和领悟能力；',
      '3、精通PC和手机界面交互设计和视觉设计，准确把握用户体验和设计定位；',
      '4、艺术设计、工业设计、视觉传达、传媒相关专业等相关专业本科及以上学历；',
      '备注：请将设计作品一起发送到邮箱',
    ],
  },
];
export const OPERATINGS = [
  {
    position: '运营专员',
    conditions: '杭州 | 3-5年 | 本科',
    upTitle: '工作职责',
    subTitle: '任职要求',
    dutys: [
      '1. 负责广告平台的整体资源投放优化运营，制定并执行平台资源投放策略、运营计划；',
      '2. 关注业务数据，基于效果调整广告资源，持续优化运营策略，提升平台的整体效率和持续发展能力；',
      '3. 统计、分析广告行业各类数据，对公司运营决策提供支撑，推动平台业务的发展。',
    ],
    skills: [
      '1. 本科及以上学历',
      '2. 3~5年广告投放运营相关工作经验',
      '3. 有较强的沟通和理解能力，具备较强的数据敏感度和分析能力，有独立分析和解决问题的能力',
      '4. 工作积极主动, 有耐心, 能承受较强工作压力，责任心强，良好的团队合作精神',
      '5. 有今日头条、广点通等平台的广告投放、转化提升经验者优先',
    ],
  },
];

// 解决方案轮播图文案及跳转url配置
export const BANNERS = [
  [
    {
      keywords: ['物流大数据'],
      text:
        '打通物流数据孤岛，构建大数据平台，通过对物流全程的人、车、货、场等物流要素的跟踪监控及预警分析，提高作业效率，降低企业仓储物流成本',
      url: '/static/sliderImgs/大数据-物流大数据.jpg',
      linkUrl: '/logisticsBigData',
    },
    {
      keywords: ['工业大数据'],
      text:
        '打通工业数据孤岛，构建大数据平台，实现设备状态监控预警、生产参数智能优化、生产大数据实时分析，实现智能生产，帮助生产企业降本增效',
      url: '/static/sliderImgs/大数据-工业大数据.jpg',
      linkUrl: '/industrialBigData',
    },
    {
      keywords: ['供应链大数据'],
      text:
        '打通供应链数据孤岛，构建大数据平台，通过大数据分析、算法建模、金融科技等技术，优化供应链各个环节，达到降本增效、提升服务质量的（和决策智能）目标',
      url: '/static/sliderImgs/大数据-供应链大数据.jpg',
      linkUrl: '/supplyChainBigData',
    },
    {
      keywords: ['酒店大数据'],
      text:
        '打通酒店数据孤岛，构建大数据平台，通过大数据分析、标签画像系统、智能硬件等技术，优化酒店各个业务环节，达到降本增效、智能经营的目标',
      url: '/static/sliderImgs/大数据-酒店大数据.jpg',
      linkUrl: '/hotelBigData',
    },
    {
      keywords: ['智慧城市'],
      text:
        '打通城市数据孤岛，构建大数据平台和共享交换平台，通过大数据分析、精准 扶贫系统、光伏区块链技术，提高城市智能管理能力，并实现可持续运营',
      url: '/static/sliderImgs/大数据-智慧城市大数据.jpg',
      linkUrl: '/wisdomCity',
    },
    {
      keywords: ['机场大数据'],
      text:
        '打通机场数据孤岛，构建大数据平台，通过大数据分析、智能机场应用、精准画像推荐技术，提高机场的运营管理效率，提升机场客户体验和服务质量',
      url: '/static/sliderImgs/大数据-机场大数据.jpg',
      linkUrl: '/airportBigData',
    },
  ],
  [
    {
      keywords: ['融资租赁金融科技'],
      text:
        '通过大数据、区块链、融资租赁等技术，使线下设备资产上链为安全的数字资产，构建金融科技平台，促进光伏产业发展',
      url: '/static/sliderImgs/金融科技-融资租赁金融科技.jpg',
      linkUrl: '',
    },
    {
      keywords: ['供应链金融科技'],
      text: '通过大数据、区块链、风控建模等技术，盘活企业资产，促进中小企业的融资',
      url: '/static/sliderImgs/金融科技-供应链金融科技.jpg',
      linkUrl: '',
    },
    {
      keywords: ['物流金融科技'],
      text: '通过大数据、区块链、风控建模等技术，盘活企业资产，促进中小企业的融资',
      url: '/static/sliderImgs/金融科技-物流金融科技.jpg',
      linkUrl: '',
    },
  ],
  [
    {
      keywords: ['智慧园区'],
      text:
        '打通园区数据孤岛构建大数据平台，通过大数据、SaaS化仓储物流管理软件、分析算法、物联网、智能算法及金融科技技术，构建智慧园区平台，智能化运营园区，提高园区管理效率，并通过供应链金融激活园区高效发展',
      url: '/static/sliderImgs/智慧园区.jpg',
      linkUrl: '/gardenSolution',
    },
  ],
  [
    {
      keywords: ['金融科技'],
      text:
        '打通供应链数据孤岛构建大数据平台，通过大数据、SaaS化仓储物流管理软件、分析算法、物联网、智能算法及金融科技技术，构建智慧供应链平台，实现供应链智能化运营，并通过供应链金融激活供应链高效发展',
      url: '/static/sliderImgs/智慧供应链.jpg',
      linkUrl: '/supplyChainSolution',
    },
  ],
];
