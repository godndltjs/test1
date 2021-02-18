package BnoSoft.config;

import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
//	@Value("${oauth2.server.url}")
//    private String oauth2ServerUrl;
	
	private final String apiBasePackage = "BnoSoft.controller";


	@Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage(apiBasePackage))
                .paths(PathSelectors.any())
                .build()
                //.securityContexts(Collections.singletonList(securityContext()))
                //.securitySchemes(Arrays.asList(securitySchema()))
                ;
    }

//    private SecurityContext securityContext() {
//        return SecurityContext.builder()
//                .securityReferences(defaultAuth())
//                .build();
//    }

    private List<SecurityReference> defaultAuth() {
        final AuthorizationScope[] authorizationScopes = new AuthorizationScope[] {
                new AuthorizationScope("read", "read all"),
                new AuthorizationScope("write", "write all")
        };

        return Collections.singletonList(new SecurityReference("oauth2", authorizationScopes));
    }

//    private OAuth securitySchema() {
//        final List<AuthorizationScope> authorizationScopeList = new ArrayList<>(2);
//
//        authorizationScopeList.add(new AuthorizationScope("read", "read all"));
//        authorizationScopeList.add(new AuthorizationScope("write", "access all"));
//
//        final List<GrantType> grantTypes = new ArrayList<>(1);
//        // password 기반으로 설정된 것 사용
//        // 토큰 end point (http://localhost:3000/oauth/token)
//        grantTypes.add(new ResourceOwnerPasswordCredentialsGrant(oauth2ServerUrl+"/oauth/token"));
//
//        return new OAuth("oauth2", authorizationScopeList, grantTypes);
//    }



}
