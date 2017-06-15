import Ember from 'ember';

const { Helper } = Ember;

export default Helper.extend({
  // The compute method is called at render time and returns a function that is
  // triggered by the action helper.
  compute() {
    return (evt) => {
      try {
        let { shell } = requireNode('electron'); // eslint-disable-line no-undef
        // Electron -- prevent default and open in external browser
        evt.preventDefault();
        shell.openExternal(evt.target.getAttribute('href'), { activate: true });
      } catch (e) {
        // Not Electron -- let the default link behavior happen
      }
    };
  }
});
