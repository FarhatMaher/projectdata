import {
  Directive,
  Output,
  HostBinding,
  HostListener,
  EventEmitter
} from "@angular/core";

@Directive({
  selector: "[appDnd]"
})
export class DndDirective {
  @Output() filesChangeEmiter: EventEmitter<any> = new EventEmitter();
  @HostBinding("style.background") private background = "#eee";

  @HostListener("dragover", ["$event"]) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999";
  }
  @HostListener("dragleave", ["$event"]) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";
  }
  @HostListener("drop", ["$event"]) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;

    if (files.length > 0) {
      this.background = "#eee";
      this.filesChangeEmiter.emit(files);
    }
  }
}
