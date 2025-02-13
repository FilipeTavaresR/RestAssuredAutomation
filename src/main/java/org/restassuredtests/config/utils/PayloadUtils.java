package org.restassuredtests.config.utils;

import java.nio.file.Files;
import java.nio.file.Paths;

public class PayloadUtils {

    public static String getPayload(String fileName) throws Exception {
        return new String(Files.readAllBytes(Paths.get("src/main/resources/payloads/" + fileName)));
    }
}