import sys
from pathlib import Path

BASE_DIR = str(Path(__file__).resolve().parent.parent.parent)
sys.path.append(BASE_DIR)


def main():
    if len(sys.argv) == 3:
        from libs.workers import job
        job.main(sys.argv[1], sys.argv[2])
    if len(sys.argv) == 2:
        from libs.protocols import cmain
        cmain.main(sys.argv[1])
    if len(sys.argv) == 1:
        from libs.utils import launch
        launch.main()


if __name__ == '__main__':
    main()
