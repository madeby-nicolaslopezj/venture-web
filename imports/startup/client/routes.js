import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

FlowRouter.route('/', {
  name: 'index',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'newhome'})
  }
})

FlowRouter.route('/contact', {
  name: 'contact',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'contact'})
  }
})

FlowRouter.route('/nosotros', {
  name: 'nosotros',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'nosotros'})
  }
})
FlowRouter.route('/capital-de-riesgo/raicap', {
  name: 'raicap',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'raicap'})
  }
})
FlowRouter.route('/capital-de-riesgo/red-angel', {
  name: 'angel',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'angel'})
  }
})
