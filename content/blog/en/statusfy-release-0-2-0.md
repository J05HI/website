---
title: "Statusfy: Release v0.2.0"
slug: statusfy-release-0-2-0
description: "I was just released a new version of Statusfy with new big features that can improve the users/customer experience of your Status Page System: Scheduled Maintenance, Notifications and Sitemap."
cover: blog/statusfy-release-0-2-0-cover.png
createdAt: 2018-06-25T03:00:00Z
publishedAt: 2018-06-25T03:00:00Z
updatedAt: 2020-07-18T15:41:57Z
---



I was just released a [new version](https://github.com/juliomrqz/statusfy/releases/tag/v0.2.0) of Statusfy with new big features that can improve the user experience of your Status Page System: ***Scheduled Maintenance\***, ***Notifications\***, and ***Sitemap\***.

## Scheduled Maintenance

<blog-image src="blog/statusfy-release-0-2-0-scheduled-maintenance-en.png" width="2306" height="985" alt="Statusfy - Scheduled Maintenance"></blog-image>

[Scheduled Maintenances](https://docs.statusfy.co/guide/incidents.html#scheduled-maintenance) definition is a way to let your users know ahead of time when your system(s) cannot handle requests due to a temporary maintenance update.

We tried to keep the definition of Scheduled Maintenance as simple as possible sharing the same parameters as regular incidents but adding two new parameters: [***scheduled\***](https://docs.statusfy.co/guide/incidents.html#scheduled-maintenance) and [***duration\***](https://docs.statusfy.co/guide/incidents.html#scheduled-maintenance).

## Notifications

With the new [Notifications feature](https://docs.statusfy.co/guide/notifications.html), you can keep your users notified with any Incidents update your System may have. Viewers of your Status Page can access the Choices bellow by clicking a Subscribe button.

- **Atom and RSS Feed:** These feeds include all past Incidents and Scheduled Maintenances. Your users can use Feeds Readers or tools like [IFTT](https://ifttt.com/feed) and [Zapier](https://zapier.com/apps/rss/integrations) to receive updates from these feeds.
- **iCalendar:** Your users can subscribe to a calendar containing all of your upcoming and past Scheduled Maintenances. The calendar is published using iCalendar, a popular format which is supported by most modern calendar applications.
- **Twitter:** Define Twitter accounts that your users can access in order to receive updates.
- **Support Site:** Define an external Support Site your users can access in order to receive updates from other sources you may want to provide.

***Most of these Notifications Choices are enabled by default but you can disable them in your config file. More info\*** ***[here](https://docs.statusfy.co/config/#notifications).\***

## Sitemap

Now you can notify to the search engine bots the available pages in your Status Page System with a **Sitemap**. This can help all the pages in your system to be found more easily.

## Contribute to Statusfy

Statusfy is a completely open source project, created and maintained by me (Julio Marquez), a Full Stack Developer. It's still a work in progress, so any contribution is very welcome. I'm passionate about building a versatile and a lower cost solution.

You can also support Statusfy by giving a [GitHub star ★](https://github.com/juliomrqz/statusfy) , spreading the word or [donating](https://statusfy.co/support#sponsoring) 🤓.