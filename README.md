# Vuex Subscriptions Plugin
In general, it's best to use reactivity over subscriptions, but sometimes a call to `$store.subscribe` is unavoidable. This plugin allows you to add a `...subscriptions:{[mutationType]:()=>{}},...` option to a Vue Component Definition that cleans up vuex subscriptions and automatically unsubscribes when the component is destroyed.

## Installation
`npm i vuex-subscriptions-plugin -S`

## Usage
```js
import Vue from 'vue';
import SubscriptionsPlugin from 'vuex-subscriptions-plugin';
import * as Mutation from '@/store/mutation-types';
Vue.use(SubscriptionsPlugin);

new Vue({
    template:`<div></div>`,
    methods: {
      doSomethingWitty() {
        //something witty here
      }
    },
    subscriptions: {
      [Mutation.ALTER_STATE](mutation, state) {
        console.log('This function is invoked every time an ALTER_STATE commit is fired');
        //perform some local side effect
      },
      [Mutation.UPDATE_LTUE_ANSWER]({type, payload}, state) {
        if(payload === 42) {
          this.question = "What do you get when you multiply 6 by 9 in base 13?"
          this.doSomethingWitty();
        }
      }
    }
})

```

Subscriptions must be an object with keys that match corresponding mutation types. The keys must reference a function. This function will be executed in the context of the Vue Component, so it can access data, methods, props, etc. The functions will be passed the "mutation" and the "payload" associated with the commit that triggered the subscription. See: https://vuex.vuejs.org/api/#subscribe
