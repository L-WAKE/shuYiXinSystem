export default {
  bar: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 6, "h": 20, "i": 0, "pid": -1,
    global: {
      type: 'bar', styleType: 'echart', name: this.$t('i18n1852'), resize: false,
      dims: 1, inds: 2
    },
    options: {
      setStyle: {
        requires: {
          legend: this.$t('i18n1556'),
          grid: this.$t('i18n1533'),
          xAxis: `X${this.$t('i18n1683')}`,
          yAxis: `Y${this.$t('i18n1683')}`,
          dataZoom: this.$t('i18n1458')
        },
        series: [
          {
            type: 'bar',
            yAxisIndex: 0,
            xAxisIndex: 0,
            barWidth: 'auto',
            itemStyle: {
              color: '#7888ab',
              barBorderRadius: [10, 10, 0, 0],
            },
            label: {
              show: true,
              position: 'top',
              color: '#333',
              fontSize: 12,
              formatter: '{b}-{c}',
              formatValueNum: 2
            },
            data: []
          }
        ]
      },
      setData: {
        enableData: false,
        chartDataArrOriginal: [],
        dataConfig: null
      },
      setSenior: {
        enableEvent: false,
        eventList: []
      }
    }
  },
  pie: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 6, "h": 20, "i": 0, "pid": -1,
    global: {
      type: 'pie', styleType: 'echart', name: this.$t('i18n1853'), resize: false,
      dims: 1, inds: 1
    },
    options: {
      setStyle: {
        requires: {
          legend: this.$t('i18n1556')
        },
        series: [
          {
            type: 'pie',
            roseType: false,
            radius: '65%',
            center: ['50%', '50%'],
            startAngle: 90,
          }
        ]
      },
      setData: {
        enableData: false,
        chartDataArrOriginal: [],
      },
      setSenior: {
        enableEvent: false,
        eventList: []
      }
    }
  },
  line: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 6, "h": 20, "i": 0, "pid": -1,
    global: {
      type: 'line', styleType: 'echart', name: this.$t('i18n1854'), resize: false,
      dims: 1, inds: 1
    },
    options: {
      setStyle: {},
      setData: { enableData: false }
    }
  },
  table: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    getSort: { prop: '', order: '', orderType: '', flag: false },
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 12, "h": 20, "i": 0, "pid": -1,
    global: {
      type: 'table', styleType: 'other', name: this.$t('i18n1239'), resize: false,
    },
    options: {
      setStyle: {
        requires: {},
        table: {
          isShowLayout: true,
          tableHeight: '100%',
          isUpDim: false,
          showSummary: false,
          borderWidth: 1,
          borderType: 'solid',
          borderColor: '#666',
          thHeight: 24,
          thBgColor: '#f9f9f9',
          isTransThBgColor: false,
          thFontSize: 14,
          thFontColor: '#000',
          tdBgColor: '#fff',
          isTransTdBgColor: false,
          tdFontSize: 12,
          isUserPage: true,
          pageIndex: 1,
          pageSize: 10,
          openNewWindowType: 1,
        },
        page: {}
      },
      setData: {
        enableData: false,
        chartDataArrOriginal: [],
        chartDataArr: []
      }
    }
  },
  summaryTable: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    getSort: { prop: '', order: '', orderType: '', flag: false },
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 12, "h": 20, "i": 0, "pid": -1,
    global: {
      type: 'summaryTable', styleType: 'other', name: this.$t('i18n1855'), resize: false,
    },
    options: {
      setStyle: {
        requires: {},
        table: {
          isShowLayout: true,
          tableHeight: '100%',
          borderWidth: 1,
          summaryBold: false,
          summaryFontSize: 12,
          summaryFontColor: '#333',
          borderType: 'solid',
          borderColor: '#666',
          thHeight: 24,
          thBgColor: '#f9f9f9',
          isTransThBgColor: false,
          thFontSize: 14,
          thFontColor: '#000',
          tdBgColor: '#fff',
          isTransTdBgColor: false,
          tdFontSize: 12,
          isUserPage: true,
          pageIndex: 1,
          pageSize: 10,
          openNewWindowType: 1,
        },
        page: {}
      },
      setData: {
        enableData: false,
        chartDataArrOriginal: [],
        chartDataArr: []
      }
    }
  },
  newTable: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 12, "h": 30, "i": 0, "pid": -1,
    global: {
      type: 'newTable', styleType: 'other', name: this.$t('i18n1856'), resize: false,
    },
    options: {
      setStyle: {
        requires: {},
        tableDesing: {
          data: [['', '', ''], ['', '', '']],
          merge: {},
          style: {},
          binds: {},
          dimensions: [3, 2],
          freezeColumns: undefined,
          tableOpt: {},
          comments: {},
          isEnableDrill: {},
          event: {}
        },
        newTable: {
          thTopBackground: '#f5f5f5',
          thTopFontB: true,
          thTopFontI: false,
          thTopFontU: false,
          thTopFontstyle: 'SimSun',
          thTopFontsize: 12,
          thTopFontColor: '#333',
          thTopTextAlign: 'left',
          thLeftBackground: '#f5f5f5',
          thLeftFontB: true,
          thLeftFontI: false,
          thLeftFontU: false,
          thLeftFontstyle: 'SimSun',
          thLeftFontsize: 12,
          thLeftFontColor: '#333',
          thLeftTextAlign: 'left',
          tdBackground: '#fff',
          tdFontstyle: 'SimSun',
          tdFontsize: 12,
          tdFontColor: '#333',
          tdTextAlign: 'left',
          pageSize: 10,
        },
        page: {}
      },
      setData: {
        enableData: false,
        chartDataArrOriginal: [],
        chartDataArr: [],
        isReflush: false,
        isCoverConfig: false
      }
    }
  },
  tab: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 12, "h": 29, "i": 0, "pid": -1,
    global: {
      type: 'tab', name: 'Tab', resize: false,
    },
    options: {
      setStyle: {
        requires: {},
        currTabIndex: 0
      }
    },
    children: [
      {
        tabkey: 'tab 1',
        pri: 0,
        childList: []
      },
      {
        tabkey: 'tab 2',
        pri: 0,
        childList: []
      }
    ]
  },
  search: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 6, "h": 8, "i": 0, "pid": -1,
    global: {
      type: 'search', name: this.$t('i18n126'), resize: false, show: true
    },
    options: {
      setStyle: {
        requires: {},
        search: {}
      },
      setData: { enableData: true },
    }
  },
  text: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 6, "h": 6, "i": 0, "pid": -1,
    global: {
      type: 'text', name: this.$t('i18n1857'), resize: false,
    },
    options: {
      setStyle: {
        requires: {},
        text: {
          fontB2: false,
          fontI2: false,
          fontU2: false,
          fontS2: false,
          fontstyle2: "Microsoft YaHei",
          fontsize2: 20,
          color2: "#000000",
          fontB: false,
          fontI: false,
          fontU: false,
          fontS: false,
          fontstyle: "Microsoft YaHei",
          fontsize: 20,
          color: "#000000",
          digits: 2,
          ischeck: false,
          replace: "",
          replaceFail: "&&&",
          lineHeight: 1.5,
          position: "left",
          isUseStaticTxt: false,

        }
      },
      setData: {
        enableData: true,
        chartDataArr: {},
        textArea: "",//本文编辑
        textAreaShow: "",//编辑后的展示
        staticTxt: "", //静态文本
        isReflush: false
      },

    }
  },
  picture: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 4, "h": 20, "i": 0, "pid": -1,
    global: {
      type: 'picture', name: this.$t('i18n1858'), resize: true,
    },
    options: {
      setStyle: {
        requires: {},
        picture: {
          pictureType: '1',// 1、本地图片  2、网络图片
          pictureUrl: '',//图片地址
          title: '',
          pictureName: '',
          width: '100%',
          height: '100%',
          opacity: 1,//透明度
          borderWidth: 0,//边框宽度
          borderColor: "",//边框颜色



        }
      },
      setData: { enableData: false },

    }
  },
  zhexiantu: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 6, "h": 20, "i": 0, "pid": -1,
    global: {
      type: 'zhexiantu', styleType: 'echart', name: this.$t('i18n308'), resize: false,
      dims: 1, inds: 5
    },
    options: {
      setStyle: {
        requires: {
          legend: this.$t('i18n1556'),
          grid: this.$t('i18n1533'),
          xAxis: `X${this.$t('i18n1683')}`,
          yAxis: `Y${this.$t('i18n1683')}`,
          dataZoom: this.$t('i18n1458')
        },
        series: [
          {
            type: 'line',
            smooth: false, // 是否平滑显示
            lineStyle: {
              color: '#EE4714',
              width: 1,
              type: 'solid',

            },
            label: {
              show: true,
              fontSize: 12,
              color: '#000000',
              doFormat: false,
              formatValueNum: 2

            },
            areaStyle: {
              color: '#EE4714',
              opacity: 0.5
            }
          }
        ]
      },
      setData: {
        enableData: false,
        chartDataArrOriginal: [],
      },
      setSenior: {
        enableEvent: false,
        eventList: []
      }
    }
  },
  radar: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 6, "h": 20, "i": 0, "pid": -1,
    global: {
      type: 'radar', styleType: 'echart', name: this.$t('i18n309'), resize: false,
      dims: 1, inds: 5
    },
    options: {
      setStyle: {
        requires: {
          legend: this.$t('i18n1556'),
        },
        maxAddNumber: 10,
        radar: {
          radius: '50%',
          name: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 12,
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: []
        },

        series: [
          {
            type: 'radar',
            data: [{
              name: '',
              value: [],
              label: {
                show: true,
                color: '#211F1D',
                fontSize: 12,
                position: 'top'
              },
              lineStyle: {
                color: '#211F1D',
                width: 1,
                type: 'solid'
              },
              areaStyle: {
                color: '#C5792C',
                opacity: 0.5
              }
            }],


          }
        ]
      },
      setData: {
        enableData: false,
        chartDataArrOriginal: [],
      },
      setSenior: {
        enableEvent: false,
        eventList: []
      }
    }
  },
  funnel: {
    download_id: "",//新增参数 下载id
    download_PRO_STATE: "",  //新增参数 下载生成状态
    file_ID: "",    //新增参数 下载文件id
    "x": 0, "y": 0, "w": 6, "h": 20, "i": 0, "pid": -1,
    global: {
      type: 'funnel', styleType: 'echart', name: this.$t('i18n310'), resize: false,
      dims: 1, inds: 1
    },
    options: {
      setStyle: {
        requires: {
          legend: this.$t('i18n1556'),
        },
        maxAddNumber: 10,


        series: [
          {
            type: 'funnel',
            left: '10%',
            top: 20,
            bottom: 20,
            width: '80%',
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              show: true,
              position: 'inside',
              fontSize: 12,
              color: '#FFFFFF'
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [],


          }
        ]
      },
      setData: {
        enableData: false,
        chartDataArrOriginal: [],
      },
      setSenior: {
        enableEvent: false,
        eventList: []
      }
    }
  },
}
