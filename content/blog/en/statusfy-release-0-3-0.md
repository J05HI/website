---
title: "Statusfy: Release v0.3.0"
slug: statusfy-release-0-3-0
description: "We just released a new version of Statusfy with new features and performance improvements: Docker support, new commands, three new languages translate the Interface and more."
cover: blog/statusfy-release-0-3-0-cover.png
created: 2019-03-21T17:45:00Z
published: 2019-03-21T17:45:00Z
updatedAt: 2020-04-19T14:23:46Z
---



It was just released a [new version](https://github.com/juliomrqz/statusfy/releases/tag/v0.3.0) of Statusfy with new features and performance improvements: Docker support, new commands, three new languages translate the Interface and more.

## CLI

Two new commands are now available: [delete-incident](https://docs.statusfy.co/guide/commands.html#delete-incident) and [update-incident](https://docs.statusfy.co/guide/commands.html#delete-incident). They are useful if you're managing a huge amount of incidents or multiple languages.

## Scheduled Maintenance

We apply minor improvements to the layout of the Scheduled Incidents: the end date is now displayed as well as the incident content. You can also customize the [position of this section](https://docs.statusfy.co/config/#scheduled), choosing one of these options: belowSystems, aboveSystems, and aboveGlobalStatus.

## Docker

We now officially support [Docker](https://hub.docker.com/r/bazzite/statusfy). We don't recommend it for production yet, we need your feedback first in order to make sure that the image works properly.

## New translations:

Three new languages translate the Interface:

- German (thanks to [Dennis Herzberg](https://github.com/dennis47528))
- Hungarian (thanks to [Peter Borsa](https://github.com/asrob))
- Portuguese from Brazil (thanks to [felipeklasen](https://github.com/felipeklasen))

If you're using one of these languages, you no longer need to manually provide a translation file 🤓.

## Statusfy Users

If your company or organization is using Statusfy, we welcome you to leave your feedback, feelings, comments, impressions, and suggestions [here](https://github.com/juliomrqz/statusfy/issues/159).

Your comments will be a great motivation for us to improve Statusfy. We are very grateful for your replies and support.

## Special Acknowledgement

We would like to thank [Thomas Jensen](https://opencollective.com/thomasjsn) and [Janez Troha](https://opencollective.com/janez-troha) for having contributed financially to the development of Statusfy through [OpenCollective](https://opencollective.com/statusfy). We are very grateful for their contribution.

## Contribute to Statusfy

Statusfy is a completely [open source project](https://github.com/aceforth/statusfy), created and maintained by me, a Full-Stack Developer. It's still a work in progress, so any contribution is very welcome. We're passionate about building a versatile and a lower cost solution.

You can also support us by:

- Giving a [GitHub star ★](https://github.com/juliomrqz/statusfy).
- [Spreading the word](https://twitter.com/intent/tweet?url=https%3A%2F%2Fmarquez.co%2Fstatusfy&via=juliomrqz&text=Statusfy%3A%20A%20marvelous%20Open%20Source%20Status%20Page%20system&hashtags=statusfy%2C%20opensource).
- [Donating](https://opencollective.com/statusfy).
- Or becoming a [sponsor](/statusfy#sponsoring).
