package com.example.demo.menu.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class MenuPatchDto {
    private long menuId;

    @NotBlank(message = "The name must not be blank.")
    private String menuName;

    @NotBlank(message = "The content must not be blank.")
    private String menuContent;

//    @NotBlank(message = "The price must not be blank.")
    private Integer price;

    public void setMenuId(long menuId){
        this.menuId = menuId;
    }
}
