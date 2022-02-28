"use strict";

let div = new DomElement('.block')
let text = prompt('Введите текст')

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.renderElement = function () {
        let select = this.selector[0]
        let element;
        if (select === '.') {
            element = document.createElement('div')
            element.setAttribute('class', this.selector.slice(1, 0))
            element.setAttribute('class', this.selector.slice(1))
        } else if (select === '#') {
            element = document.createElement('p')
            element.setAttribute('id', this.selector.slice(1, 0))
            element.setAttribute('id', this.selector.slice(1))
        }
        if (element) {
            element.innerHTML = text
            document.body.append(element)
        }

    }

    this.conveyStr = function () {

    }
}

div.renderElement()

