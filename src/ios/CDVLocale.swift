import Foundation

@objc(CDVLocale)
public class CDVLocale : CDVPlugin {
  @objc
  func execute(_ command: CDVInvokedUrlCommand) {
    let result: [String: Any] = ["region": NSLocale.current.regionCode ?? "unknown", "language": NSLocale.current.languageCode ?? "unknown", "preferredLanguages": NSLocale.preferredLanguages];
    let pluginResult:CDVPluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: result)

    self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
  }
}
