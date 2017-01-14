import jQuery from 'jquery';
import 'jquery-vhtml';

function onlyNum (val) {
  return String(val || '').match(/^[0-9]*$/);
}

function onlyAlpha (val) {
  return String(val || '').match(/^[a-zA-Z]*$/);
}

function validate (predicate, val) {
  return predicate(val) ? '' : 'invalid';
}

function renderForm (data={}) {
  return `
<form>
		<h4>This is an example of the benefits of virtual dom</h4>
		<p>The key is noticing how you do not lose focus on the inputs despite running a full re-render on the entire form.</p>
		<div>
      <label for="item1">Item 1 (letters only)</label>
      <input class="${validate(onlyAlpha, data.item1)}" id="item1" type="text" placeholder="type letters" value="${data.item1 || ''}" />
    </div>
    <div>
      <label for="item2">Item 2 (numbers only)</label>
      <input class="${validate(onlyNum, data.item2)}" id="item2" type="text" placeholder="type numbers" value="${data.item2 || ''}" />
    </div>
	</form>`;
}

jQuery(function () {
  const $app = jQuery('#app');
  $app.vhtml(renderForm({}));
  const $item1 = jQuery('#item1');
  const $item2 = jQuery('#item2');
  $item1.add($item2).on('keyup', function () {
    $app.vhtml(renderForm({
      item1: $item1.val(),
      item2: $item2.val()
    }));
  });
});