/* globals CodeMirror */

import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        var self = this;
        this._super(...arguments);
        var myTextarea = this.$('#editor-body')[0];
        new CodeMirror(myTextarea, {
            value: this.get('post.body'),
            mode: 'markdown',
            // theme: 'hopscotch',
            keyMap: 'vim'
        }).on('change', function(editor) {
            var body = editor.getValue();
            self.set('post.body', body);
        });
    },
    actions: {
        save(post) {
            this.sendAction('save', post);
        }
    }
});
