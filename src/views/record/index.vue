<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" gutter="5em">
      <x-input title="主&emsp;&emsp;&nbsp;题" v-model="value1"></x-input>
      <popup-picker
        title="类&emsp;&emsp;&nbsp;型"
        :data="list3"
        :columns="3"
        @on-show="getList()"
        v-model="value4"
        show-name
      ></popup-picker>
      <x-number title="金&emsp;&emsp;&nbsp;额" v-model="value" :fillable="true" width="100px"></x-number>
      <datetime title="日&emsp;&emsp;&nbsp;期" v-model="time1" value-text-align="left"></datetime>
      <x-textarea
        title="备&emsp;&emsp;&nbsp;注"
        placeholder="请填写详细信息"
        :show-counter="false"
        :rows="3"
      ></x-textarea>
      <br />
      <x-button type="primary" action-type="button">提交</x-button>
      <x-button type="warn" action-type="reset">重置</x-button>
    </group>
  </div>
</template>

<script>
// import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/record'
import { fetchExpendList } from "@/api/common";
import {
  XInput,
  Selector,
  Datetime,
  XTextarea,
  XNumber,
  PopupPicker
} from "vux";
export default {
  components: {
    XInput,
    Selector,
    Datetime,
    XTextarea,
    XNumber,
    PopupPicker
  },
  data() {
    return {
      value: 0,
      value1: "张三",
      time1: "2017-06-01",
      value4: [],
      list3: [
        {
          name: "中国",
          value: "china",
          parent: 0
        },
        {
          name: "美国",
          value: "USA",
          parent: 0
        },
        {
          name: "广东",
          value: "china001",
          parent: "china"
        },
        {
          name: "广西",
          value: "china002",
          parent: "china"
        },
        {
          name: "美国001",
          value: "usa001",
          parent: "USA"
        },
        {
          name: "美国002",
          value: "usa002",
          parent: "USA"
        },
        {
          name: "广州",
          value: "gz",
          parent: "china001"
        },
        {
          name: "深圳",
          value: "sz",
          parent: "china001"
        },
        {
          name: "广西001",
          value: "gx001",
          parent: "china002"
        },
        {
          name: "广西002",
          value: "gx002",
          parent: "china002"
        },
        {
          name: "美国001_001",
          value: "0003",
          parent: "usa001"
        },
        {
          name: "美国001_002",
          value: "0004",
          parent: "usa001"
        },
        {
          name: "美国002_001",
          value: "0005",
          parent: "usa002"
        },
        {
          name: "美国002_002",
          value: "0006",
          parent: "usa002"
        }
      ]
    };
  },
  methods: {
    getList() {
      console.log("getList获取的数据为");
      fetchExpendList().then(response => {
        this.list3 = response.data.records;
      });
    }
  },
};
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
