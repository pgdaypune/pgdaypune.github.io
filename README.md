# PGPune

### Local dev setup

#### Prequisites

`brew install hugo`
> More info https://gohugo.io/installation/

#### Setup

```sh
# Clone repo
git clone https://github.com/pgdaypune/pgdaypune.github.io.git
cd pgdaypune.github.io.git
# Update submodules
git submodule update --init
```

> Now run `hugo server` & visit http://localhost:1313/

### Update Site

- To add new meetups

    Run: `hugo new content content/meetups/3.md`
    or manually add new files in content/meetups dir

- To add new speakers

    Run: `hugo new content content/speakers/full-name.md`
    or manually add new files in content/speakers dir

- To update the Dates, Meetup titles, countdown, venues, links edit [data/info.yaml](/data/info.yaml) file in data dir
- To update the SLIDES images, edit [data/slider.yaml](/data/slider.yaml) file in data dir
- To update the SCHEDULE, edit [data/schedule.yaml](/data/schedule.yaml) file in data dir
- To update HOME page content, edit [hugo.yaml](./hugo.yaml) file
- To update ABOUT page, edit [about.md](/content/about.md) file in content dir
- To update CFP page, edit [call-for-papers.md](/content/call-for-papers.md) file in content dir
- To update REGISTER page, edit [register.md](/content/register.md) file in content dir

Directory structure
```
.
├── hugo.yaml
├── data
│   ├── info.yaml
│   ├── schedule.yaml
│   └── slider.yaml
├── content
│   ├── about.md
│   ├── call-for-papers.md
│   ├── register.md
│   ├── schedule.md
│   ├── search.md
│   ├── meetups
│   │   ├── 1.md
│   │   ├── 2.md
│   │   └── ...
│   └── speakers
│       ├── speakers-list.md
│       └── ...
├── static
│   ├── CNAME
│   ├── images
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   ├── meetups
│   │   │   ├── 1
│   │   │   │   ├── group-pic.jpeg
│   │   │   │   ├── poster.jpeg
│   │   │   │   ├── schedule.jpeg
│   │   │   │   ├── speakers.jpeg
│   │   │   │   ├── talks-slider.png
│   │   │   │   └── talks.jpeg
│   │   │   └── 2
│   │   │       └── ...
│   │   ├── pgpune-dark.png
│   │   ├── pgpune.png
│   │   └── speakers
│   │       ├── speaker-images-here.jpg
│   │       └── ...
│   └── slides
│       ├── slides-here.pdf
│       └── ...
├── README.md
├── assets
│   └── css
│       └── common
│           └── elephant.css
└── layouts
    └── partials
        ├── elephant.html
        └── index_profile.html 
```
