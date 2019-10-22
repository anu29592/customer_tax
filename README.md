# Project Information

## HowTo Contribute

* clone the project
  
  ```git clone git@bitbucket.org:akf_innovationlab/customer-tax-info-collector.git```
* init `.env` file

  ```touch .env```

  add the following content to the file
  ```
  # This file defines all environment variables that the application needs.
  # DO NOT DEFINE PRODUCTION SECRETS IN THIS FILE.
  # Use ".env.local" for local overrides during development.
  # Use real environment variables when deploying to production.
  # https://symfony.com/doc/current/best_practices/configuration.html#infrastructure-related-configuration

  ###> symfony/framework-bundle ###
  APP_ENV=dev
  APP_SECRET=ChangeMe
  #TRUSTED_PROXIES=127.0.0.1,127.0.0.2
  #TRUSTED_HOSTS='^localhost|example\.com$'
  ###< symfony/framework-bundle ###

  ###> doctrine/doctrine-bundle ###
  # Format described at http://docs.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
  # For an SQLite database, use: "sqlite:///%kernel.project_dir%/var/data.db"
  # Configure your db driver and server_version in config/packages/doctrine.yaml
  #DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name
  DATABASE_URL=sqlite:///%kernel.project_dir%/var/data.db


  ###> nelmio/cors-bundle ###
  CORS_ALLOW_ORIGIN=^https?://localhost(:[0-9]+)?$
  ###< nelmio/cors-bundle ###
  ```

* init composer

  ```composer install``` 
* init node (vue js app)

  ```yarn``` 

* init database

  ```php bin\console doctrine:schema:create``` 

  ```php bin\console doctrine:fixtures:load```
 
* start backend app (in the background)

  ```php bin\console server:start```

* start vuejs app

  ```yarn encore dev --watch```

* open http://localhost:8000

# Work on Bitbucket

**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).