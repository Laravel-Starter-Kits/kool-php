<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center"><a href="https://kool.dev" target="_blank"><img src="https://kool.dev/img/logo.png" width="400" alt="kool - cloud native dev tool"></a></p>

## About Kool PHP

This is very basic docker laravel setup with HMR(Hot Module Replacement)

```bash
curl -fsSL https://kool.dev/install | bash
```

After running above command your ready to run the application.

Go inside your project direactory run the below command to setup your project first time.

```bash
kool run setup
```
that's it your application up & running successfully.

Below are the commands to start/stop your docker containers
```bash
kool start
```
```bash
kool stop
```

```bash
kool exec app sh
```
More information -> https://kool.dev/docs/presets/laravel
Happy coding...
