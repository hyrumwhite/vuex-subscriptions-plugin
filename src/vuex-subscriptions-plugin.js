export default {
	install(Vue) {
		Vue.mixin({
			created() {
				if (this.$options.subscriptions) {
					this.__subscriptionPluginUnsubscribe = this.$store.subscribe((commitObject, state) => {
						let subscription = this.$options.subscriptions[commitObject.type];
						typeof subscription === 'function' && subscription.call(this, commitObject, state);
					});
				}
			},
			destroyed() {
				if (this.__subscriptionPluginUnsubscribe) {
					this.__subscriptionPluginUnsubscribe();
				}
			},
		});
	},
};