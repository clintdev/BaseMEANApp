var config = Application.require('config');

function ConfigurationExtension(env) {

    var loadedConfig = config[env];

    console.log("Loaded the configuration for " + env);

    if (loadedConfig === undefined) {
      throw new Error("Unable to load the configuration '" + env + "'.");
    }

    return loadedConfig;
}

console.log('base configuration extensions complete...');

module.exports = ConfigurationExtension;
