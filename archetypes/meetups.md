---
title: 'Meetup #{{ replace .File.ContentBaseName "-" " " | title }}'
---

**Event Date:** {{ .Date }}

**Venue:** Add-Venue

### Meet the Speakers

![speakers](/images/meetups/{{ replace .File.ContentBaseName "-" " " | title }}/speakers.jpeg)

### Schedule

![schedule](/images/meetups/{{ replace .File.ContentBaseName "-" " " | title }}/schedule.jpeg)
