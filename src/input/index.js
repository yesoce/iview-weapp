Component({
    behaviors: ['wx://form-field'],

    externalClasses: ['i-class','i-input-class'],

    properties: {
        title: {
            type: String
        },
        // text || textarea || password || number
        type: {
            type: String,
            value: 'text'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        placeholder: {
            type: String,
            value: ''
        },
        autofocus: {
            type: Boolean,
            value: false
        },
        mode: {
            type: String,
            value: 'normal'
        },
        right: {
            type: Boolean,
            value: false
        },
        error: {
            type: Boolean,
            value: false
        },
        errorColor: {
            type: String,
            value: '#f00'
        },
        maxlength: {
            type: Number
        },
        minHeight: {
            type: Number
        },
        maxHeight: {
            type: Number
        },
        required: {
            type: Boolean,
            value: false
        }
    },

    methods: {
        handleInputChange(event) {
            const { detail = {} } = event;
            const { value = '' } = detail;
            this.setData({ value });

            this.triggerEvent('change', event);
        },

        handleInputFocus(event) {
            this.triggerEvent('focus', event);
            this.setData({ focused: true });
        },

        handleInputBlur(event) {
            this.triggerEvent('blur', event);
            this.setData({ focused: false });
        }
    }
});
