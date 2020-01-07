import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './Testcomponent';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}


console.log($)
$(document).ready(function () {
    console.log('Jquery Initiated...');

    const testView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },
        render() {
            console.log("Hello Backbone")
            ReactDOM.render(<TestComponent />, this.el)
            return this;
        }
    })
    const model = new Backbone.Model();
    const view = new testView({ model, el: "#app" });

});



document.body.appendChild(component());
