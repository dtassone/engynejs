exports.commands = {};

exports.commands.contains           = require('./commands/asserts/contains');
exports.commands.equal              = require('./commands/asserts/equal');
exports.commands.below              = require('./commands/asserts/below');
exports.commands.above              = require('./commands/asserts/above');
exports.commands.least              = require('./commands/asserts/least');
exports.commands.most               = require('./commands/asserts/most');
exports.commands.startWith          = require('./commands/asserts/startWith');
exports.commands.endWith            = require('./commands/asserts/endWith');

exports.commands.click              = require('./commands/click');
exports.commands.clickText          = require('./commands/clickText');
exports.commands.close              = require('./commands/close');
exports.commands.element            = require('./commands/element');
exports.commands.elements           = require('./commands/elements');
exports.commands.attribute          = require('./commands/attribute');
exports.commands.hover              = require('./commands/hover');
exports.commands.index              = require('./commands/indexFn');
exports.commands.open               = require('./commands/open');
exports.commands.sleep              = require('./commands/sleep');
exports.commands.pressKey           = require('./commands/pressKey');
exports.commands.find               = require('./commands/find');
exports.commands.select             = require('./commands/select');
exports.commands.selectText         = require('./commands/selectText');
exports.commands.then               = require('./commands/then');
exports.commands.type               = require('./commands/type');
exports.commands.wait               = require('./commands/wait');
exports.commands.screenshot         = require('./commands/screenshot');
exports.commands.global             = require('./commands/global');

exports.properties = {};
exports.properties.activeElement    = require('./properties/activeElement');
exports.properties.parent           = require('./properties/parent');
exports.properties.cssClass         = require('./properties/cssClass');
exports.properties.isEnabled        = require('./properties/isEnabled');
exports.properties.inspectedElement = require('./properties/inspectedElement');
exports.properties.expect           = require('./properties/expect');
exports.properties.first            = require('./properties/first');
exports.properties.last             = require('./properties/last');
exports.properties.length           = require('./properties/length');
exports.properties.text             = require('./properties/text');
exports.properties.value            = require('./properties/value');
exports.properties.toBeAtAndShould  = require('./properties/toBeAtAndShould');
exports.properties.title            = require('./properties/title');
exports.properties.not              = require('./properties/not');

