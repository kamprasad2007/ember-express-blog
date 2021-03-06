import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),

    didInsertElement() {
        this._super(...arguments);
    },

    actions: {
        toggleNavbar() {
            Ember.$('.navbar').toggleClass('show');
            Ember.$('.nav-toggle').toggleClass('active');
        },

        invalidateSession() {
            this.get('session').invalidate();
        }
    }
});
