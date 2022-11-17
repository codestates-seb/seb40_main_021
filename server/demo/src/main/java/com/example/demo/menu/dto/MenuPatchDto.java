package com.example.demo.menu.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class MenuPatchDto {
    private long menuId;

    @NotBlank(message = "The name must not be blank.")
    private String menuName;

    @NotBlank(message = "The content must not be blank.")
    private String menuContent;

    @NotNull
    private Integer price;

    public void setMenuId(long menuId){
        this.menuId = menuId;
    }
}
