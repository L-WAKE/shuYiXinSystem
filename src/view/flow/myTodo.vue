<template>
  <div>
    我的代办

    <div>
      ============================将el-table-column 的type 设为空串
      解决树形按钮一直是首列问题=============================================
    </div>
    <div>
      <el-table
        :data="tableData1"
        style="width: 100%"
        row-key="id"
        border
        lazy
        :load="load"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <template v-for="(item, index) in columnData">
          <el-table-column
            :type="item.types"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
          >
            <template v-if="item.children">
              <el-table-column
                v-for="val in item.children"
                :type="val.types"
                :key="val.prop"
                :prop="val.prop"
                :label="val.label"
              >
              </el-table-column>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>

    <br />
    <br />
    <div>
      ==============================checkbox-group label设为id v-model就不须绑定字符串数组
      解决字符串重复问题=============================================
    </div>

    <div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city.id" :key="city.id">{{
          city.cityName
        }}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div>
      <br />
      <br />
      <br />
      ==============================单选=============================================
    </div>
    <div>
      <!-- <el-checkbox-group v-model="checkboxGroup" @change="handleCheckedChange">
        <el-checkbox v-for="city in groupCities" :key="city.id"></el-checkbox>
      </el-checkbox-group> -->
      <div>
        <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: "1",
      checkboxGroup: [],
      groupCities: [
        { id: 1, cityName: "上海" },
        { id: 2, cityName: "北京" },
        { id: 3, cityName: "广州" },
        { id: 4, cityName: "深圳" },
        { id: 5, cityName: "重庆" },
        { id: 6, cityName: "成都" },
        { id: 7, cityName: "杭州" },
        { id: 8, cityName: "武汉" },
      ],

      checkedCities: [],
      cities: [
        { id: 1, cityName: "上海" },
        { id: 2, cityName: "北京" },
        { id: 3, cityName: "广州" },
        { id: 4, cityName: "深圳" },
      ],

      columnData: [
        { prop: "date", label: "日期", types: "" },
        {
          prop: "name",
          label: "姓名",
          types: "",
          children: [
            { prop: "address", label: "地址", types: "" },
            { prop: "date", label: "日期" },
            { prop: "name", label: "姓名", types: "" },
          ],
        },
        { prop: "address", label: "地址", types: "" },
      ],
      tableData1: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          hasChildren: true,
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    handleCheckedChange(event, item) {
      console.log(event);
      console.log("checkedCities", this.checkedCities);
    },
    handleCheckedCitiesChange(event, item) {
      console.log(event);
      console.log("checkedCities", this.checkedCities);
    },
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            id: 32,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
        ]);
      }, 1000);
    },
  },
};
</script>
