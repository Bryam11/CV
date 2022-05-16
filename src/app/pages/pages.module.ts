import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { InicioComponent } from "./inicio/inicio.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";
import { QualificationComponent } from "./qualification/qualification.component";
import { ServiceComponent } from "./service/service.component";
import { SkillComponent } from "./skill/skill.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from "@angular/common";
import { SwiperModule } from 'swiper/angular';
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";


@NgModule({
    declarations: [
        InicioComponent,
        AboutComponent,
        SkillComponent,
        ServiceComponent,
        QualificationComponent,
        PortafolioComponent,
        TestimonialComponent,
        ContactComponent
    ],
    imports: [CommonModule, SwiperModule, NgxWhastappButtonModule],
    exports: [
        InicioComponent,
        AboutComponent,
        SkillComponent,
        ServiceComponent,
        QualificationComponent,
        PortafolioComponent,
        TestimonialComponent,
        ContactComponent
    ],
})

export class PagesModule {}