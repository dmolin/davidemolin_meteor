import {Mongo} from 'meteor/mongo';

export const FeaturedProjects = new Mongo.Collection('featured_projects');
FeaturedProjects.attachBehaviour('timestampable');

export const Projects = new Mongo.Collection('projects');
Projects.attachBehaviour('timestampable');

export const Testimonials = new Mongo.Collection('testimonials');
Testimonials.attachBehaviour('timestampable');
