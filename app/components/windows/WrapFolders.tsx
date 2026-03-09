import Folder from "./Folder";

export default function WrapFolders() {
  return (
    <div className="grid grid-cols-1 gap-2 p-4">
      <Folder name="Desarrollos" url_image="/folder.png" />
      <Folder name="Experiencia" url_image="/file.png" />
      <Folder name="Tecnologías" url_image="/file.png" />
    </div>
  );
}
