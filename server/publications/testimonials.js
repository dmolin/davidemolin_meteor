import {Testimonials} from '/lib/collections';

export default function () {
  Meteor.publish('testimonials', function() {
    return Testimonials.find({},{sort:{priority:-1, at:-1}});
  });
}