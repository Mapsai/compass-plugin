import GmtPlugin from './plugin';
import GmtStore from 'stores';

/**
 * A sample role for the component.
 */
const ROLE = {
  name: 'Gmt',
  component: GmtPlugin
};

/**
 * Activate all the components in the Gmt package.
 * @param {Object} appRegistry - The Hadron appRegisrty to activate this plugin with.
 **/
function activate(appRegistry) {
  // Register the GmtPlugin as a role in Compass
  //
  // Available roles are:
  //   - Instance.Tab: { name: <String>, component: <React.Component>, order: <Number> }
  //   - Database.Tab: { name: <String>, component: <React.Component>, order: <Number> }
  //   - Collection.Tab: { name: <String>, component: <React.Component>, order: <Number> }
  //   - CollectionHUD.Item: { name <String>, component: <React.Component> }
  //   - Header.Item: { name: <String>, component: <React.Component>, alignment: <String> }

  appRegistry.registerRole('Enhancement', ROLE);
  appRegistry.registerStore('Gmt.Store', GmtStore);
}

/**
 * Deactivate all the components in the Gmt package.
 * @param {Object} appRegistry - The Hadron appRegisrty to deactivate this plugin with.
 **/
function deactivate(appRegistry) {
  appRegistry.deregisterRole('Enhancement', ROLE);
  appRegistry.deregisterStore('Gmt.Store');
}

export default GmtPlugin;
export { activate, deactivate };
