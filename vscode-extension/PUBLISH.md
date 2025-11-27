# Guía de Publicación - JSON Extractor

## 📦 Extensión Empaquetada

La extensión está lista en: `json-extractor-1.0.0.vsix`

## 🚀 Opciones de Publicación

### Opción 1: Publicar en VS Code Marketplace (Oficial)

#### Requisitos Previos
1. Crear cuenta en [Azure DevOps](https://dev.azure.com/)
2. Crear Personal Access Token (PAT) con permisos de Marketplace

#### Pasos:
```bash
# Instalar vsce globalmente
npm install -g @vscode/vsce

# Crear publisher (solo primera vez)
vsce create-publisher Jorge-Luis-Herrera

# Login con tu PAT
vsce login Jorge-Luis-Herrera

# Publicar
vsce publish
```

#### Documentación completa:
https://code.visualstudio.com/api/working-with-extensions/publishing-extension

---

### Opción 2: Distribución Manual (Más Fácil)

#### Instalar localmente:
```bash
code --install-extension json-extractor-1.0.0.vsix
```

#### Compartir el archivo .vsix:
- Sube el archivo a GitHub Releases
- Comparte en redes sociales
- Los usuarios pueden instalarlo con el comando de arriba

---

### Opción 3: Publicar en Open VSX Registry (Alternativa Libre)

```bash
# Instalar ovsx
npm install -g ovsx

# Publicar
ovsx publish json-extractor-1.0.0.vsix -p <tu-token>
```

Registro: https://open-vsx.org/

---

## 📝 Información de la Extensión

- **Nombre**: json-extractor
- **Display Name**: JSON Extractor
- **Publisher**: Jorge-Luis-Herrera
- **Versión**: 1.0.0
- **Licencia**: MIT

## 🔗 URLs Importantes

- **Repository**: https://github.com/Jorge-Luis-Herrera/JsonExtractor
- **VS Code Marketplace**: https://marketplace.visualstudio.com/
- **Documentación**: https://code.visualstudio.com/api

## ✅ Checklist Pre-Publicación

- [x] Código limpio y optimizado
- [x] README.md profesional
- [x] LICENSE agregada (MIT)
- [x] CHANGELOG.md creado
- [x] package.json completo con metadata
- [x] Extensión empaquetada (.vsix)
- [ ] Cuenta de Azure DevOps creada
- [ ] Personal Access Token generado
- [ ] Publisher registrado en Marketplace

## 📊 Próximos Pasos

1. Decidir plataforma de publicación (Marketplace vs Manual)
2. Si eliges Marketplace: Crear cuenta y PAT en Azure DevOps
3. Publicar con `vsce publish`
4. Actualizar README con badge del Marketplace
5. Promocionar en redes sociales

## 🎉 La Extensión Está Lista

El archivo `json-extractor-1.0.0.vsix` contiene:
- Código optimizado
- Documentación completa
- Licencia MIT
- Metadata para publicación
- Changelog

¡Todo listo para publicar! 🚀
