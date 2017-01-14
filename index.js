'use strict';

import { diff, patch } from 'virtual-dom';
import VNode from 'virtual-dom/vnode/vnode';
import VText from 'virtual-dom/vnode/vtext';
import htmlToVdom from 'html-to-vdom';
import jQuery from 'jquery';

const convertHTML = htmlToVdom({
  VNode: VNode,
  VText: VText
});

jQuery.fn.vhtml = vhtml;

export default function vhtml (html) {
  return this.map(function () {
    return _vhtml(this, html);
  });
};

function _vhtml (element, html) {
  if (element.innerHTML) {
    html = element.outerHTML.replace(element.innerHTML, html);
  }
  else {
    html = element.outerHTML.replace('</', `${html}</`);
  }
  const oldTree = convertHTML(element.outerHTML);
  const newTree = convertHTML(html);
  const patches = diff(oldTree, newTree);
  return patch(element, patches);
}