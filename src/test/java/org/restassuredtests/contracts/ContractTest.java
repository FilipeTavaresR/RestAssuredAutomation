package org.restassuredtests.contracts;

import io.restassured.module.jsv.JsonSchemaValidator;
import org.restassuredtests.config.BaseTest;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class ContractTest extends BaseTest {

    @Test
    public void testUserContract() {
        given(spec)
                .when()
                .get("/users/1")
                .then()
                .statusCode(200)
                .body(JsonSchemaValidator.matchesJsonSchemaInClasspath("user-schema.json"));
    }
}