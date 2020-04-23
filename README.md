[![Netlify Status](https://api.netlify.com/api/v1/badges/f1be3382-7307-4c2e-bff8-d6576df7a512/deploy-status)](https://app.netlify.com/sites/novelbaakaio/deploys)

# Novel

A website (maybe an electron app too) that provides a custom UI for [wuxiaworld](https://www.wuxiaworld.com/) (and other, to be decided, novel providers) novels.

## Documentation

[Issue Board](https://github.com/baaka-io/Novel/projects/1?fullscreen=true)

## Ideas

### Git

I will be using 2 seperate branches, master and dev.

### Technologies

#### Frontend

The framework will be react so all following technologies will be based on that.
For the UI I will be using tailwindcss since I want to dive more deeply into that and had some good experience in the past.

#### Backend

I will be using express together with trainstation, my own routing library for express.

Authentication will pe provided by keycape, my own solution for a reusable authentication server.

#### Deployment

The project will be automatically deployed, by using Github Actions, whenever something gets pushed to the master branch.

The Frontend and Backend will be seperately deployed, the frontend on netlify and the backend on my own digital ocean droplet.

This will ensure that, even if I forget to pay the backend or the server goes down, the frontend will be availabe for prefetched novels.

### General

The application will respect the theme preferences of the operating system (dark/light mode).

Fetching and searching novels will be implemented by using a headless browser.

It might be required to introduce a cache for each novel chapter to improve the response time of the endless reading experience.

The application has to be mobile friendly. I could also say that the mobile experience is a higher priority than the desktop experience.

### Novel Searching

Novel Searching will be realised by using the [novelupdates](https://novelupdates.com) website

### Novel Reader

It would be also cool if you could prefetch the novels into localstorage of something like that, so that offline reading is possible.
The Novels themself will be read in an infinite scroll manner.
The next chapter gets loaded automatically when needed, to provide a seemless experience when reading your favorite novels.
The Novel Reader should also make the comments of each chapter available for the reader (I've had a lot of fun experiences in the past only because of the commments, so this is a must have).
Writing comments over the website might be hard or even not possible. This is not in the scope of the project since I am always lurking and not writing anyway.
