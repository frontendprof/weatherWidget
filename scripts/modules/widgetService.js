import {
  renderWidgetForecast,
  renderWidgetOther,
  renderWidgetToday,
} from './render.js';

export const startWidget = () => {
  console.log('Starting ...');

  const widget = document.createElement('div');
  widget.classList.add('widget');

  renderWidgetToday(widget);
  renderWidgetOther(widget);
  renderWidgetForecast(widget);

  return widget;
};
