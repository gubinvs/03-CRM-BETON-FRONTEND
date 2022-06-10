// Создаю таск для копирования файлов при сборке проекта в папку для продакшена
export const copy_file = () => {
    return app.gulp.src(app.path.src.files) 
    .pipe(app.gulp.dest(app.path.build.files))
} 

export const copy_normalize = () => {
    return app.gulp.src(app.path.src.norm) 
    .pipe(app.gulp.dest(app.path.build.css))
} 