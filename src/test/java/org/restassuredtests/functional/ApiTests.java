package org.restassuredtests.functional;

import io.restassured.http.ContentType;
import org.restassuredtests.config.BaseTest;
import org.restassuredtests.config.utils.PayloadUtils;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.greaterThan;

public class ApiTests extends BaseTest {

        @Test
        public void testGetUsers() {
            given(spec)
                    .when()
                    .get("/users")
                    .then()
                    .statusCode(200)
                    .body("size()", greaterThan(0))
                    .body("[0].name", equalTo("João Silva")); // Valida o primeiro usuário
        }

        @Test
        public void testPostUser() throws Exception {
            String requestBody = PayloadUtils.getPayload("userPayload.json");

            given(spec)
                    .contentType(ContentType.JSON)
                    .body(requestBody)
                    .when()
                    .post("/users")
                    .then()
                    .statusCode(201)
                    .body("name", equalTo("Fernanda Lima"))
                    .body("username", equalTo("fernandalima"))
                    .body("email", equalTo("fernanda.lima@example.com"));
        }

        @Test
        public void testPostUserMissingField() throws Exception {
            String requestBody = PayloadUtils.getPayload("invalidUserPayload.json");

            given(spec)
                    .contentType(ContentType.JSON)
                    .body(requestBody)
                    .when()
                    .post("/users")
                    .then()
                    .statusCode(400); // Valida que falta o campo obrigatório "name"
        }

        @Test
        public void testSimulateServerError() {
            given(spec)
                    .when()
                    .get("/nonexistent")
                    .then()
                    .statusCode(404); // Simula um erro 404
        }
}
