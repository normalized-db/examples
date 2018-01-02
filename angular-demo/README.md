# Angular4-Demo

Demo app with Angular4 and IndexedDB.

 - **Author**: Sandro Schmid ([saseb.schmid@gmail.com](<mailto:saseb.schmid@gmail.com>))
 - **Version**: 2.3.0

## Notes

 - The `normalized-db`-project is under active development.
 - To ease versioning equal major and minor version numbers are used for all modules. A demo's version number indicates the used version of the `normalized-db`-modules.
 
## Description
 
This demo uses the default `IdbContext`. Especially note the 
[DataStoreService](https://github.com/normalized-db/examples/blob/master/angular-demo/src/app/core/service/data-store.service.ts) 
in `src/app/core/service` (used as interface between the app and the `normalized-db`-modules) 
and the [schema](https://github.com/normalized-db/examples/blob/master/angular-demo/src/assets/data/schema.ts)
in `src/assets/data` (describing the data-model used for normalization).

For instructions on how to run the app after installing the dependencies (`npm install`), please refer to the [Angular-CLI docs](https://cli.angular.io/).
