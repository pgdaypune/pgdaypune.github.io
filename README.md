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

- To update HOME page, edit [hugo.yaml](./hugo.yaml) file to edit Meetup titles, countdown, venues, etc in homepage
- To update ABOUT page, edit [about.md](/content/about.md) file in content dir
- To update CFP page, edit [call-for-papers.md](/content/call-for-papers.md) file in content dir
- To update REGISTER page, edit [register.md](/content/register.md) file in content dir
