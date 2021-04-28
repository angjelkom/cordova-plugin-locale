package io.jackdev;

import android.os.Build;
import android.os.LocaleList;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;

public class CDVLocale extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        JSONObject result = new JSONObject();
        try {
            result.put("region", Locale.getDefault().getCountry());
            result.put("language", Locale.getDefault().getLanguage());
            JSONArray languages = new JSONArray();
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                LocaleList locales = LocaleList.getDefault();
                for (int i = 0; i < locales.size(); i++) {
                    languages.put(locales.get(i).getLanguage());
                }
            } else {
                languages.put(Locale.getDefault().getLanguage());
            }
            result.put("preferredLanguages", languages);
            callbackContext.success(result);
        } catch (JSONException e) {
            e.printStackTrace();
            callbackContext.error(e.getMessage());
        }
        return false;
    }
}