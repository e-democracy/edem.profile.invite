# -*- coding: utf-8 -*-
from __future__ import absolute_import
from Products.Five.browser.pagetemplatefile import ZopeTwoPageTemplateFile
from gs.profile.invite.initialresponse import InitialResponseForm


class InitialResponseForm(InitialResponseForm):
    label = 'Initial Response'
    pageTemplateFileName = 'browser/templates/initialresponse.pt'
    template = ZopeTwoPageTemplateFile(pageTemplateFileName)
