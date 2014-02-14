var assert = chai.assert;

suite('CSV', function() {
      test('Prueba con CSV incorrecto', function() {
	  original.value = '"producto", "precio" \n "libro de O\'Reilly", "7,2"';
	  calculate();
	  assert.equal(finaltable.innerHTML, '<p>\n</p><table class="center" id="result">\n<tbody><tr> <td>producto</td>  <td>precio</td> </tr>\n<tr> <td>libro de O\'Reilly</td>  <td>7,2</td> </tr>\n</tbody></table>');
	  assert.notMatch(finaltable.innerHTML, /class="error"/);
      });

      test('Prueba con CSV correcto', function() {
	  original.value = '"producto", "precio" \n "libro de O\"Reilly", "7,2", "124"';
	  calculate();
	  assert.match(finaltable.innerHTML, /class="error"/);
      });
});