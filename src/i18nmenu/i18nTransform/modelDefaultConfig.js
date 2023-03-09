export default {
  global: {
    nameShow: true,
    nameColor: '#000',
    tipTxt: this.$t('i18n1859'),
    linkShow: false,
    linkUrl: '',
    linkTxt: ''
  },
  style: {
    echart: {
      title: {
        show: false,
        text: '',
        padding: 5,
        left: 'center',
        top: 'top',
        textStyle: {
          color: '#333',
          fontSize: 18,
        }
      },
      legend: {
        show: false,
        type: 'plain',
        left: 'center',
        top: 'top',
        orient: 'horizontal',
      },
      grid: {
        left: 40,
        right: 50,
        top: 30,
        bottom: 20,
      },
      xAxis: {
        show: true,
        name: this.$t('i18n1860'),
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: true
        },
        axisLabel: {
          show: true,
          interval: 0,
          rotate: 0,
          color: '#333',
          fontSize: 12
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#666',
            width: 1,
            type: 'solid'
          }
        }
      },
      yAxis: {
        show: true,
        name: this.$t('i18n1861'),
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: true
        },
        axisLabel: {
          show: true,
          interval: 'auto',
          rotate: 0,
          color: '#333',
          fontSize: 12
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#666',
            width: 1,
            type: 'solid'
          }
        }
      },
      dataZoom: [
        {
          type: 'slider',
          show: false,
          start: 0,
          end: 100,
        }
      ],
    },
    other: {

    }
  },
  data: {
    dataSetId: "",//对应数据集ID
    dataSetInfo: {
      des: "",
      name: "",
      nameCn: "",
      sql: "",
      tableType: '0',
      dataSourceId: ''
    },
    dataSourceId: "",//对应数据源ID
    //数据配置维度  数组方式存放
    drillList: [],//维度钻取配置
    dimension: [
      // {
      //     "clumType":"dimension",
      //     "colId":"维度层级ID",
      //     "dimId":"维度ID",
      //     "dimLevel":"维度层级",
      //     "colNameCn":"维度层级中文名",
      //     "colAlias":"维度层级输出别名",
      //     "isEnableDrill":false,
      //     "orderType":""
      // }
    ],
    //指标配置  数组方式存放
    indicator: [
      // {
      //     colId: "字段ID",
      //     clumType: "indicator",//字段类型
      //     colNameCn: "字段名称",
      //     colAlias: "字段别名",
      //     orderType: "", //该字段的排序方式
      //     group: "",//分组函数
      // }

    ],
    //临时计算指标存放
    expression: [],

    //过滤条件配置
    filter: [
      {
        "groupGroupLogicType": "",//组间逻辑关系：or/and
        "groupName": "",//组名称
        "config": []
      }
      // {
      //     colId: "字段ID",
      //     clumType: "indicator",//字段类型，根据字段类型，前台展示可支持的过滤条件
      //     colNameCn: "字段名称",
      //     groupGroupLogicType: "and",//组间过滤条件关系
      //     detGroup: "-1/1",//清单过滤、结果集过滤
      //     //字段过滤条件配置
      //     // 大于/greaterThan、小于/lessThan、等于/equal、
      //     // 大于等于/greaterThanEq、小于等于lessThanEq、
      //     // like/like，null/等于空值，notNull/不等于空值
      //     // 不等于/notEqual
      //
      //     config: [
      //         {
      //             groupInnerLogicType:'and',
      //             conditionValueType: "1",// 对应后台过滤条件类型编码   值，文件...
      //             fileId: "过滤条件为文件时的文件ID",
      //             fileName: "过滤条件为文件时，文件名",
      //             conditionOperator: "EQ", //过滤操作符，对应后台字段值，大于、小于，小于等于，大于等于的时候value只有唯一一个值
      //             value: [3], //
      //         },
      //         {
      //             groupInnerLogicType:'and',
      //             conditionValueType: "1",// 对应后台过滤条件类型编码   值，文件...
      //             fileId: "过滤条件为文件时的文件ID",
      //             fileName: "过滤条件为文件时，文件名",
      //             conditionOperator: "GT", //过滤操作符，对应后台字段值，大于、小于，小于等于，大于等于的时候value只有唯一一个值
      //             value: [3], //
      //         }
      //     ]
      // },{
      //     colId: "字段ID",
      //     clumType: "indicator",//字段类型，根据字段类型，前台展示可支持的过滤条件
      //     colNameCn: "字段名称222",
      //     groupInnerLogicType: "and",//过滤条件之间关系 组内关系
      //     groupGroupLogicType: "and",//组间过滤条件关系
      //     detGroup: "-1/1",//清单过滤、结果集过滤
      //     //字段过滤条件配置
      //     // 大于/greaterThan、小于/lessThan、等于/equal、
      //     // 大于等于/greaterThanEq、小于等于lessThanEq、
      //     // like/like，null/等于空值，notNull/不等于空值
      //     // 不等于/notEqual
      //     config: [
      //         {
      //             groupInnerLogicType:'and',
      //             conditionValueType: "1",// 对应后台过滤条件类型编码   值，文件...
      //             fileId: "过滤条件为文件时的文件ID",
      //             fileName: "过滤条件为文件时，文件名",
      //             conditionOperator: "EQ", //过滤操作符，对应后台字段值，大于、小于，小于等于，大于等于的时候value只有唯一一个值
      //             value: [3], //
      //         },
      //         {
      //             groupInnerLogicType:'and',
      //             conditionValueType: "1",// 对应后台过滤条件类型编码   值，文件...
      //             fileId: "过滤条件为文件时的文件ID",
      //             fileName: "过滤条件为文件时，文件名",
      //             conditionOperator: "GT", //过滤操作符，对应后台字段值，大于、小于，小于等于，大于等于的时候value只有唯一一个值
      //             value: [3], //
      //         }
      //     ]
      // }
    ],

    //额外字段排序
    order: [
      // {
      //     colId: "字段ID",
      //     clumType: "indicator",//字段类型，根据字段类型，前台展示可支持的过滤条件
      //     colNameCn: "字段名称",
      //     orderType: "asc/desc", //该字段的排序方式
      // },
      // {
      //     colId: "字段ID",//对应后台 COL_ID
      //     clumType: "dimension",//字段类型
      //     colNameCn: "字段名称",
      //     dimLevel: "层级",//维度层级
      //     dimId: "维度ID",
      //     dimLevelId: "层级ID",
      //     orderType: "asc/desc", //该字段的排序方式
      // }


    ],
    //分页参数
    pageParam: {
      defaultPageSize: 100,
      pageSize: 100,
      pageIndex: 1
    },
    //编辑页面预览数据量
    viewSzie: 100,  //在编辑页面默认展示100条数据 , 不传参默认展示全量  ，针对配置页面假分页会赋值至pageParam中pageSize
    polOrDet: "-1",  //明细或者聚合
    report: {  //是否展示总条数
      size: false,
      count: 0
    }
  }
}
