<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        md="12"
      >
        <material-card
          color="success"
          full-header
        >
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                Java
              </div>
              <div class="text-caption">
                Backend Roadmap First Step
              </div>
            </div>
          </template>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
            />
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'
  import Vue from 'vue'
  import axios from 'axios'

  export default {
    name: 'DashboardView',
    row: 5,
    data: () => ({
      headers: [
        {
          sortable: true,
          text: 'ID',
          value: 'id',
        },
        {
          sortable: false,
          text: 'Title',
          value: 'title',
        },
        {
          sortable: false,
          text: '',
          value: 'koTitle',
        },
      ],
      items: [
        {
          id: 0,
          title: 'setting',
          koTitle: '환경 세팅하기',
        },
        {
          id: 1,
          title: 'variable',
          koTitle: '변수',
        },
        {
          id: 2,
          title: 'operator',
          koTitle: '연산자',
        },
        {
          id: 3,
          title: 'condition & for',
          koTitle: '조건문과 반복문',
        },
        {
          id: 4,
          title: 'array',
          koTitle: '배열',
        },
        {
          id: 5,
          title: 'OOP(Object Oriented Programming) 1',
          koTitle: '객체 지향 프로그래밍 1',
        },
        {
          id: 6,
          title: 'OOP(Object Oriented Programming) 2',
          koTitle: '객체 지향 프로그래밍 2',
        },
        {
          id: 7,
          title: 'Exception Handling',
          koTitle: '예외 처리',
        },
        {
          id: 8,
          title: 'generics, enums, annotation',
          koTitle: '제너릭스, 열거형, 어노테이션',
        },
        {
          id: 9,
          title: 'thread',
          koTitle: '쓰레드',
        },
        {
          id: 10,
          title: 'lambda, stream',
          koTitle: '람다, 스트림',
        },
      ],
    }),

  }
</script>
