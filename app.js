//STUDENT CLASS
class student{
    constructor(idNim, fullName, gender, facultyList, programStudy){
        this.idNim = idNim;
        this.fullName = fullName;
        this.gender = gender;
        this.facultyList = facultyList;
        this.programStudy = programStudy;
    }
}

//UI CLASS
class UI {
    static displayStudent(){
        const studentList = [
            {
                idNim : '105021810001',
                fullName : 'Steve Rufh',
                gender : 'Male',
                facultyList : 'Fakultas Ilmu Komputer',
                programStudy : 'Sistem Informasi'
            },
            {
                idNim : '105021810002',
                fullName : 'Roger Dans',
                gender : 'Male',
                facultyList : 'Fakultas Ekonomi dan Bisnis',
                programStudy : 'Akuntansi'
            }

        ];
        const students = studentList;

        students.forEach((student) => UI.addStudentToList(student))
    }
    static addStudentToList(student){
        const list = document.querySelector('section #student-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${student.idNim}</td>
        <td>${student.fullName}</td>
        <td>${student.gender}</td>
        <td>${student.facultyList}</td>
        <td>${student.programStudy}</td>
        <td><a href="#" class =btn btn-danger btn sm-delete"></a></td>
        `;
        list.appendChild(row); 
    }
    }

    document.addEventListener('DOMContentLoaded', UI.displayStudent); 

    

 

    $(document).ready(function () {
        $("#facultyList").change(function () {
            var val = $(this).val();
            if (val == "pascasarjana") {
                $("#programOfStudyList").html("<option value=''selected disabled>--SELECT PROGRAM OF STUDY--</option><option value='prodi1'>Magister Manajemen</option><option value='prodi2'>Magister Teologi</option>");
            } else if (val == "filsafat") {
                $("#programOfStudyList").html("<option value=''selected disabled>--SELECT PROGRAM OF STUDY--</option><option value='prodi1'>Ilmu Filsafat</option>");
            } else if (val == "fkip") {
                $("#programOfStudyList").html("<option value=''selected disabled>--SELECT PROGRAM OF STUDY--</option><option value='prodi1'>Pendidikan Agama</option><option value='prodi2'>Pendidikan Bahasa Inggris</option><option value='prodi3'>Pendidikan Ekonomi</option><option value='prodi4'>Pendidikan Luar Sekolah</option>");
            } else if (val == "fekon") {
                $("#programOfStudyList").html("<option value=''selected disabled>--SELECT PROGRAM OF STUDY--</option><option value='prodi1'>Akuntansi</option><option value='prodi2'>Manajemen</option>");
            }
            else if (val == "fp") {
                $("#programOfStudyList").html("<option value=''selected disabled>--SELECT PROGRAM OF STUDY--</option><option value=''selected disabled>--SELECT PROGRAM 0F STUDY</option><option value='prodi1'>Agroteknologi</option>");
            }
            else if (val == "fik") {
                $("#programOfStudyList").html("<option value=''selected disabled>--SELECT PROGRAM OF STUDY--</option><option value='prodi1'>Sistem Informasi</option><option value='prodi2'>Informatika</option>");
            }
            else if (val == "fkep") {
                $("#programOfStudyList").html("<option value=''selected disabled>--SELECT PROGRAM OF STUDY--</option><option value='prodi1'>Profesi Ners</option><option value='prodi2'>Keperawatan</option>");
            }
            else if (val == "asmi") {
                $("#programOfStudyList").html("<option value=''selected disabled>--SELECT PROGRAM OF STUDY--</option><option value='prodi1'>Sekretaris (D3)</option>");
            }
        });
    })



