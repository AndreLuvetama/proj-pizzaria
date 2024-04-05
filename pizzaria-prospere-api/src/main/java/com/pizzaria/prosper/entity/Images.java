package com.pizzaria.prosper.entity;

import com.pizzaria.prosper.enuns.ImageExtension;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tb_images")
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column
    private String type;
    @Column
    private String name;
    @Column
    private Long size;
    @Column
    @Enumerated(EnumType.STRING)
    private ImageExtension extension;
    @Column
    @CreatedDate
    private LocalDate uploadDate;
    @Column
    private String tags;
    @Column(length = 75000)
    @Lob
    private byte[] file;

    public String getFileName(){
        return getName().concat(".").concat(getExtension().name());
    }


}
