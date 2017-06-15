import Ember from 'ember';
import slides from '../slides';

const { Route } = Ember;

export default Route.extend({
  model({ index }) {
    return slides[index];
  },

  setupController(controller, model) {
    let index = slides.indexOf(model);

    controller.setProperties({
      slide: model,
      prevSlide: slides[index - 1] || null,
      nextSlide: slides[index + 1] || null
    });
  },

  serialize(model) {
    return { index: slides.indexOf(model) };
  }
});
